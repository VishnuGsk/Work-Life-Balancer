const db = require('./dbService')
const FetchTidService = ((req,res)=>{
    console.log("Fetching Tid serivice invoked");
    const tid = req.body.tid;
    db.query("SELECT *  FROM tracker;",
    
    (error,results)=>{
        if (error) throw error;
     
        console.log(results);
        if (results.length >0) {

          
          res.json({sucess:true,
                  tid:results[results.length-1].tid,
                //   whr:results[results.length].whr,
                //   bmin:results[results.length].bhr
                  
          });
          
          
          
        } 		
        res.end();
            }
    )
})

module.exports = FetchTidService;