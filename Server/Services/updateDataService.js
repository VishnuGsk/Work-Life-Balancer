const db = require('./dbService')
const UpdateDataService = ((req,res)=>{
    console.log("updateDataService invoked");
    const tid = req.body.Tid;
    console.log(tid);
    db.query("UPDATE tracker SET whr  = whr + 1, bhr = bhr + 20 WHERE tid = ?",
    [tid],
    (error,results)=>{
        if (error) throw error;
        // If the account exists
        console.log(results);
        if (results.length >0) {

          
          res.json({sucess:true,
                  
                  
          });
          
          
          
        } 		
        res.end();
            }
    )
})

module.exports = UpdateDataService;