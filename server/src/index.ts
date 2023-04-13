import dotenv from "dotenv"
import {dbConnect} from "./Config/database.config";
import {ApolloServer, BaseContext} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import resolver from "./Graphql/Resolver";
import typeDefs from "./Graphql/TypeDefs";

dotenv.config()
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
start().then(() => console.log("server is correctly setup"))
