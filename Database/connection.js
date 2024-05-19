// ye hame ascyn provide karti hai hai ais waja se ye hum lib use karti hai 

import mongoose from "mongoose";
 const connectToDatabase = async ()=>{

    //error handlng
    try{
        // await mongoose.connect(process.env.DATABASE,{
        await mongoose.connect("mongodb+srv://fmuqadas2001:kaddu123@cluster0.glkzizb.mongodb.net/newdb",{
        // useNewUrlParser:true,
        // useUnifiedTopolgy:true,
    });
    console.log("Connect to database");
    } catch (error){
        console.error('Error connrcton to mongoDB' , error.message);
    }
 }

 export default connectToDatabase ;

