import express from "express";
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res, next) => {
  res.send('hello from backend')
});

export default app;
