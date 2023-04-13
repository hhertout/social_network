import express, {Express} from "express"
import dotenv from "dotenv"
import cors from "cors"
import PostRouter from "./Router/Post.routes";
import UserRouter from "./Router/User.routes";
import AuthRouter from "./Router/Auth.routes";
import {dbConnect} from "./Config/database.config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolver from "./resolver";
import typeDefs from "./graphql";

dotenv.config()
export const app: Express = express()

//App config
app.use(cors())
app.use(express.json());

//App routes
app.use("/post", PostRouter)
app.use("/user", UserRouter)
app.use("/auth", AuthRouter)

// Start server
const port = process.env.PORT || 4000
const start = async () => {
    try {
        await dbConnect()

        const server = new ApolloServer({
            typeDefs: typeDefs, resolvers: resolver, 
        })
        const {url} = await startStandaloneServer(server, {
            listen: {port: 4000}
        })

        console.log(`🚀 Server ready at ${url}`)
        //app.listen(port, () => console.log(`✨ Server is running on port: ${port}`))
    } catch (err: any) {
        console.log(`unable to connect to database: ${err.message}`)
    }
}
start()
