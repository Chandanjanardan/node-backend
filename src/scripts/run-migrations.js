const fs = require("node:fs/promises");
const path = require("node:path");

const { pool } = require("../config/database");

const migrationsDirectory = path.join(
    __dirname,
    "..",
    "database",
    "migrations"
);

async function ensureMigrationsTable(client) {
    await client.query(`
        CREATE TABLE IF NOT EXISTS schema_migrations (
            filename TEXT PRIMARY KEY,
            applied_at TIMESTAMPTZ
                NOT NULL
                DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

async function getMigrationFiles() {
    const files = await fs.readdir(migrationsDirectory);

    return files
        .filter((file) => file.endsWith(".sql"))
        .sort();
}

async function getAppliedMigrations(client) {
    const result = await client.query(`
        SELECT filename
        FROM schema_migrations
    `);

    return new Set(
        result.rows.map((row) => row.filename)
    );
}

async function applyMigration(client, filename) {
    const filePath = path.join(
        migrationsDirectory,
        filename
    );

    const sql = await fs.readFile(filePath, "utf8");

    try {
        await client.query("BEGIN");

        await client.query(sql);

        await client.query(
            `
                INSERT INTO schema_migrations (filename)
                VALUES ($1)
            `,
            [filename]
        );

        await client.query("COMMIT");

        console.log(`Applied: ${filename}`);
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    }
}

async function runMigrations() {
    const client = await pool.connect();

    try {
        await ensureMigrationsTable(client);

        const files = await getMigrationFiles();
        const appliedMigrations =
            await getAppliedMigrations(client);

        for (const filename of files) {
            if (appliedMigrations.has(filename)) {
                console.log(`Skipped: ${filename}`);
                continue;
            }

            await applyMigration(client, filename);
        }
    } finally {
        client.release();
    }
}

async function main() {
    try {
        await runMigrations();
        console.log("Migrations completed successfully");
    } catch (error) {
        console.error(
            "Migration failed:",
            error.message
        );

        process.exitCode = 1;
    } finally {
        await pool.end();
    }
}

main();