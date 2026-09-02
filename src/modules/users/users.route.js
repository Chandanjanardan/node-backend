const {createUserController, getUserController} = require("./users.controller")
const {userSchema} = require("./users.schema")
function registerUser(app){
    app.post("/user/register",userSchema,createUserController)
}

function getAllUser(app){
    app.get("/users",getUserController)
}

module.exports ={registerUser,getAllUser};
