import mongoose from "mongoose";

async function connectDB() {

    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Database Connected");

    } catch(err) {
        console.log("DATABASE CONNECTION ERROR", err.message);
    }

}


export default connectDB