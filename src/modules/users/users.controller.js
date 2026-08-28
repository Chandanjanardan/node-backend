async function createUserController(request,reply){
    const user = request.body   
    return reply.code(201).send({
        user
    })
}

module.exports={
    createUserController
}