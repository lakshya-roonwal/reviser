import dotenv from 'dotenv'; 
dotenv.config(); 

import app from "./app";


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('Server Started on port : ', port)
})