import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongoose is connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error", error);
        console.log("In DB file");
        process.exit(1);
    }
}

export default connectDB;