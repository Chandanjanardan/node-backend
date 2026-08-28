const {userSchema} = require("./users.schema")
const {createUserController} = require("./users.controller")
function registerUser(app){
    app.post("/user/register",userSchema,createUserController)
}

function getAllUser(app){
    app.get("/users",async(request,reply)=>{
        const users=[]
        return reply.code(200).send({
            users
        })
    })
}

module.exports ={registerUser,getAllUser}