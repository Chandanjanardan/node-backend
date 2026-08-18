const Fastify = require("fastify")


function buildApp(){
    const app = Fastify({
        logger:true
    })
    app.get("/health",async()=>{
        return {
            status:"ok"
        }
    })
    return app

}



module.exports = buildApp