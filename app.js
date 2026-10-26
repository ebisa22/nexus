import express from 'express';
import path from 'node:path';
import homePageRouter from './routes/home.js'; 
import categoryRouter from './routes/category.js';
import itemRouter from './routes/item.js';
import internalError from './controllers/internalError.js';
import error404 from './controllers/error404.js';

const __dirname=import.meta.dirname;
const PORT=process.env.PORT || 3000;
const app=express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use('/',homePageRouter);
app.use('/category',categoryRouter);
app.use('/item',itemRouter);

app.use(error404);
app.use(internalError);

app.listen(PORT,(error)=>{
   if(error){
    console.error(error);
    return;
   }
   console.log('Listening to port',PORT)
})


