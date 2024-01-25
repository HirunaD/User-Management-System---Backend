const app = require('./app'); //import app.js 
//defining variables
const port = 3001;
const host = '127.0.0.1'; 

const server = app.listen(port, host, () => {  //create a server to run the app listen the express app server
    console.log(`server listening to ${server.address().port}`) //to confirm the server listen to the port. 
                                                                //make sure that you use backticks(``) instead of quotes(')
}); 