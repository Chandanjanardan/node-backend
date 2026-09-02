const {createUserSerivce} = require("./user.service")
async function createUserController(request, reply) {   
    const data = await createUserSerivce(request.body)
    return reply.code(201).send({user:data})
    
}
async function getUserController(request,reply) {   
    const users = []
    return reply.code(200).send({users})
    
}
module.exports={createUserController,getUserController}