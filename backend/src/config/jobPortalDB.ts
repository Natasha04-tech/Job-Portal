import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();


export const connectMongoose=async()=>{
     const URL=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wfuxdyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    
    try{

        await mongoose.connect(URL)

   
        console.log('database connected succesfully');

    }catch(error){
        console.log('Error while connection database is',error);
    }
}