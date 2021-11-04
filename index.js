import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';

const app=express();
const PORT=5000;
app.use(bodyParser.json()); //parse incoming request from json to javascript
app.use('/users',userRoutes);


app.get('/',(req,res)=>{res.send('Hello World')});


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));