import * as mongoose from "mongoose";

export const dbConnect = async () => {
    await mongoose.connect('mongodb://localhost:27017/twitter_like')
}