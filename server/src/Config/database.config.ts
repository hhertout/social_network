import * as mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        console.log(process.env.MONGO_URI!)
        await mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.log(error)
    }
}