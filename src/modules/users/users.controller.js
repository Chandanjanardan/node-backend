async function createUserController(request,reply){
    const user = request.body   
    return reply.code(201).send({
        user
    })
}


async function getUserController(request,reply){
    const users =[]
    return reply.code(200).send({users})
}

module.exports={
    createUserController,getUserController
}