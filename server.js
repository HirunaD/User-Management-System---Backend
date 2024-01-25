const express = require('express'); //import the express
const app = express(); //create express instance called app
const cors = require('cors'); //import cors
//defining variables
const port = 3001;
const host = '127.0.0.1'; 
const mongoose = require('mongoose'); //import mongoose
const router = require('./router');

//setup the middlewares
app.use(cors());
app.use(express.json());

//import mongoose uri
const uri = 'mongodb+srv://hirunadesilva:Hiruna_72@cluster0.ni03buq.mongodb.net/?retryWrites=true&w=majority' 

//connect function
const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('Error connecting to MongoDB: ', error);
    }
}

const server = app.listen(port, host, () => {  //create a server to run the app listen the express app server
    console.log(`server listening to ${server.address().port}`) //to confirm the server listen to the port. 
                                                                //make sure that you use backticks(``) instead of quotes(')
}); 

app.use('/api', router);