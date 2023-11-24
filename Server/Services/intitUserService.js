const db = require('./dbService')
const InitUserService = ((req,res)=>{
    console.log("Init User Service  invoked");
    const Uid = req.body.Uid;
    db.query("INSERT INTO tracker (uid) VALUES (?);",
    [Uid],
    (error,results)=>{
        if (error) throw error;
        // If the account exists
        console.log(results);
        
        res.end();
            }
    )
    
})

module.exports = InitUserService;