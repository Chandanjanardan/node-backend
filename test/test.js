const buildApp = require("../src/app")
const {test} = require("node:test")
const assert = require("node:assert")

test("health test",async(t)=>{
    const app = buildApp()
    t.after(()=>app.close())

    const response = await app.inject({
        method:"GET",
        url:"/health"
    })
    
    assert.equal(response.statusCode,200)
    assert.deepEqual(response.json(),
                {message:"Ok"}
    )
})


// test cretae user 
test("test create user endpoint",async(t)=>{
    const app = buildApp()
    t.after(()=>app.close())
    const body ={
        email:"test@example.com",
        name:"test",
        age:21,
       
    }
    const response = await app.inject({
        method:"POST",
        url:"/user/register",
        payload:body
    })
    assert.equal(response.statusCode,201)
    assert.deepEqual(response.json(),{
        user:body
    })
})

// get all users 
test("get all user test",async(t)=>{
    const app = buildApp()
    t.after(()=>app.close())
    const response = await app.inject({
        method:"GET",
        url:"/users"
    })
    assert.equal(response.statusCode,200)
    assert.deepEqual(response.json(),{
        users:[]
    })
})