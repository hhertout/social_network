import express, {Express} from "express"
import dotenv from "dotenv"
import cors from "cors"
import PostRouter from "./Router/Post.routes";
import UserRouter from "./Router/User.routes";
import AuthRouter from "./Router/Auth.routes";
import {dbConnect} from "./Config/database.config";
import {ApolloServer, BaseContext} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolver from "./graphql/resolver";
import typeDefs from "./graphql/typeDefs";

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

const start = async (): Promise<void> => {
    const port: number = parseInt(process.env.PORT!) || 4000
    try {
        await dbConnect()

        const server: ApolloServer<BaseContext> = new ApolloServer({
            typeDefs: typeDefs, resolvers: resolver, 
        })
        const {url} = await startStandaloneServer(server, {
            listen: {port: port}
        })

        console.log(`🚀 Server ready at ${url}`)
    } catch (err: any) {
        console.log(`unable to connect to database: ${err.message}`)
    }
}
start().then(()=> console.log("server is correctly setup") )
