const userSchema ={
    schema:{
        body:{
            type:"object",
            required:["email","name"],
            additionalProperties:false,
            properties:{
                name:{type:"string",minLength:3},
                age:{type:"integer"},
                email:{type:"string",format:"email"}
            }
        }
    }
}

module.exports={userSchema}
// to update 