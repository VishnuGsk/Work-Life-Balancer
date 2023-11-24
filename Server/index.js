//  importing modules and pakages
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
var cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LoginController = require('./Controller/LoginController')
const InitUserController = require('./Controller/initUserController')
const UpdateDataController = require('./Controller/updateDataController')
const EndTimeController = require('./Controller/endTimeController')
const FetchTidController= require('./Controller/fetchTidController')
app.use(express.json())
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
  key:"name",
  secret:"wlf-vdart",
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:60*60*24,
  },
  

}));


// Starting the Server at port 3001
app.listen(3001, () => {
    console.log('Server listening on port 3001');
  });
  
//  Login Controller code 
app.use(LoginController);
// initialise the user in tracker table 
app.use(InitUserController)
// Update WorklDetails
app.use(UpdateDataController);
// Show the value of the current tracker session
app.use(EndTimeController);
//fetch tid controller 
app.use(FetchTidController);