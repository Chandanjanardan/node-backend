const {userSchema} = require("./users.schema")
function registerUser(app){
<<<<<<< HEAD
    app.post("/user/register",{userSchema},async(request,reply)=>{
=======
    app.post("/user/register",userSchema,async(request,reply)=>{
>>>>>>> ed110d4 (ading agv and schama)
        const data = request.body
        return reply.code(201).send({user:data})
    })
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