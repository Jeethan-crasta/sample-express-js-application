const express=require('express');
const userRoutes=require('./routes/user.routes');
const errorMiddleware=require('./middlewares/error.middleware');
const cors=require('cors');
const AppError=require('./utils/AppError');
const simpleLogger=require('./middlewares/simpleLogger.middleware');


const app=express();


app.use(express.json());

app.use(cors());

app.use(simpleLogger);

app.use("/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("Health check api is working!");
});

app.use(errorMiddleware);

module.exports=app;