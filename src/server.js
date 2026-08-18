const buildApp = require("./app")

const app = buildApp()
async function startServer(){
    try {
       await app.listen({
        port:3200,
        host:"0.0.0.0"
       })

        
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}



startServer()
    
