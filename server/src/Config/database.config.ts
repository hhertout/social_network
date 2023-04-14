import * as mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.log(error)
    }
}