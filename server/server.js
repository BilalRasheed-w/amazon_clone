import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config('')

const Port = process.env.PORT


app.listen(Port,()=>{
    console.log(`server is connected on http://localhost:${Port}`)
})