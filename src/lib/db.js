import mongoose from 'mongoose'

export const connectDB= async ()=>{
    try{ 
       const connect= await mongoose.connect(process.env.MONGO_URI);
       console.log(`DataBase Connected ${connect.connection.host}`)
    }
    catch(error){
       console.log('Error, not connected to DataBase',error);
       process.exit(1);
    }
}

