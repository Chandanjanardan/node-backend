const createUserSchema ={
    body:{
        type:"object",
        required:["name","email","age"],
        properties:{
            name:{
                type :"string",
                minLength:2,

            },
            email:{
                type:"string",
                format:"email"
            },
            age:{
                type:"integer",
                minimum:18
            }
        },
        additionalProperties:false
    }
}


module.exports={
    createUserSchema
}