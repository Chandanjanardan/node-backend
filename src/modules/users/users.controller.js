const {createUserService} = require("./users.service.js")
async function createUserController(request,reply){
    const createdUser = await createUserService(request.body)
    return reply.code(201).send({
        user:createdUser
    })
}


async function getUserController(request,reply){
    const users =[]
    return reply.code(200).send({users})
}

module.exports={
    createUserController,getUserController
}