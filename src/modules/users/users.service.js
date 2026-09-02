const userRepository = require("./users.repository")
async function createUserService(userInput){
    const notmalizedUser = {
        name :userInput.name.trim(),
        email:userInput.email.trim().toLowerCase(),
        age:userInput.age ?? null
    }
    const createdUser= await userRepository.createUser(notmalizedUser)
    return createdUser

}

async function getUserService(){
    return []
}

module.exports={
    createUserService,getUserService
}
