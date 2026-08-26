const buildApp = require("./app")


async function createServer(){
    const app = buildApp()
    try {
        app.listen({
            port:3200,
        })
    } catch (error) {
        app.log.error(error)
    }
}
createServer()