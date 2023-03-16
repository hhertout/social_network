import express, {Express} from "express"
import dotenv from "dotenv"
import cors from "cors"
import PostRouter from "./Router/Post.routes";
import UserRouter from "./Router/User.routes";
import {dbConnect} from "./Config/database.config";

dotenv.config()
const app: Express = express()

//App config
app.use(cors())
app.use(express.json());

//App routes
app.use("/post", PostRouter)
app.use("/user", UserRouter)

// Start server
const port = process.env.PORT || 4000
const start = async () => {
    try {
        await dbConnect()
    } catch (err: any) {
        console.log(`unable to connect to database: ${err.message}`)
    }
    app.listen(port, () => console.log(`✨ Server is running on port: ${port}`))
}
start()