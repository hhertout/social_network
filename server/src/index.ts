import express, {Express} from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app: Express = express()

app.use(cors())

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on port => ${port}`))