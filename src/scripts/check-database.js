const { pool } = require("../src/config/database");

async function checkDatabase() {
    try {
        const result = await pool.query(
            "SELECT NOW() AS current_time"
        );

        console.log(
            "Database connected:",
            result.rows[0].current_time
        );
    } catch (error) {
        console.error(
            "Database connection failed:",
            error.message
        );

        process.exitCode = 1;
    } finally {
        await pool.end();
    }
}

checkDatabase();