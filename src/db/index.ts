
import mongoose from "mongoose";
import { DB_NAME } from '../constants'

export const connectToDB = async () => {
    try {
        console.log("🚀 ~ connectToDB ~ process.env.MONGO_DB_URL:", process.env.MONGO_DB_URL)
        const connectionInstantce = await mongoose.connect(
            `${process.env.MONGO_DB_URL}/${DB_NAME}`
        );
        console.log(
            `MongoDB Connected DB Host : ${connectionInstantce.connection.host}`
        );
    } catch (err) {
        console.log("db error", err);
    }
};

