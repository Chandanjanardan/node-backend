const Fastify = require("fastify")
const {registerUser,getAllUser} = require("./modules/users/users.route")

function buildApp(){
    const app = Fastify({
        logger:true,
       ajv:{
       customOptions: {
            removeAdditional: false
        }
       }
    })
    app.get("/health",async()=>{
        return{
            message:"Ok"
        }
    })
    app.register(registerUser)
    app.register(getAllUser)
    return app
}
module.exports = buildApp