import express from "express"
import { Request,Response } from "express"
import cors from "cors"

const app = express()
const port : Number = 3000

app.use(cors())
app.use(express.json())

app.get("/",(req : Request,res : Response) => {
    res.send("LetsCode!")
})


app.listen(port,() => {
    console.log("Save Palestine 🍉")
    console.log(`Server is listening on http://localhost:3000/`)
})



