import express from 'express';
import path from 'node:path';
import homePageRouter from './routes/home.js'; 

const __dirname=import.meta.dirname;
const PORT=process.env.PORT || 3000;
const app=express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use('/',homePageRouter);

app.listen(PORT,(error)=>{
   if(error){
    console.error(error);
    return;
   }
   console.log('Listening to port',PORT)
})

