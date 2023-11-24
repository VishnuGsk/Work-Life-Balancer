const db = require('./dbService')
const EndTimeService = ((req,res)=>{
    console.log("End time serivice invoked");
    const tid = req.body.Tid;
    console.log(tid)
    db.query("SELECT *  FROM tracker where tid = ? ;",
    [tid],
    (error,results)=>{
        if (error) throw error;
        // If the account exists
        console.log(results);
        if (results.length >0) {

          
          res.json({sucess:true,
                  
                  whr:results[0].whr,
                  bmin:results[0].bhr
                  
          });
          
          
          
        } 		
        res.end();
            }
    )
})

module.exports = EndTimeService;