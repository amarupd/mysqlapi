const express = require("express");
const cors = require("cors");

const PORT=process.env.PORT || 8000;

const app = express();

var corOptions = {
    origin: "https://localhost:5000"
}

//middleware

app.use(cors(corOptions))

app.use(express.json)

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "hello from api" })
})

//port

app.listen(PORT,()=>{
    console.log(`listening to port number : ${PORT}`);
})