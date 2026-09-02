const {pool} = require("../../config/database");

async function createUser(user){
    const sql = `
    INSERT INTO users (
    name,email,age)
values ($1,$2,$3)
returning 
id,
name,
email,
age,
created_at AS "createdAt",
updated_at AS "updatedAt"

`;
const values=[
    user.name,
    user.email,
    user.age ?? null
];
const result = await pool.query(sql,values)
return result.rows[0]
}
module.exports={createUser}