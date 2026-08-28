const {userSchema} = require("./users.schema")
const {createUserController,getUserController} = require("./users.controller")
function registerUser(app){
    app.post("/user/register",userSchema,createUserController)
}

function getAllUser(app){
    app.get("/users",getUserController)
    
}

module.exports ={registerUser,getAllUser};