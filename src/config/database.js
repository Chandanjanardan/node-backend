const { Pool} = require("pg")

if(!process.env.DATABASE_URL){
    throw new Error ("DATABASE_URL MISSING")
}
const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    max:5,
    connectionTimeoutMillis:5000,
    idleTimeoutMillis:30000
})

module.exports={pool}


// Database connection is expensive a single HTTP request can take up to 50 -100ms 
// A pool can maintian a warm chace of prestablised active tcp conntion sitting idel in the memory 
// A pool can miantan a warm chache of pre-stablised active tcp connection sittin gide in the memory 