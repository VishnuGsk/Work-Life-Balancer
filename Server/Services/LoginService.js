const db = require('./dbService')
const LoginService = ((req,res) =>{
    console.log("Login Controller invoked");
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT *  FROM userinfo where username = ? AND password = ? ;",
    [username,password],
    (error,results)=>{
      if (error) throw error;
      // If the account exists
      console.log(results);
      if (results.length >0) {
        // Authenticate the user
        req.session.loggedin = true;
        const name = req.session.username = results[0].username;
        const id= req.session.iduser=results[0].uid;
        console.log(id);
        
        res.json({sucess:true,
                name:name,
                id:id
                
        });
        
        
        
      } else if (results.length == 0){
        
        req.session.loggedin = false ;
        console.log(req.session.loggedin);
        res.json({sucess:false});
         }			
      res.end();
          })
  
    
});

module.exports = LoginService;


