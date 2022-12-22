const express=require("express");
const cors=require("cors");

const app=express();

var corOptions={
    origin:"https://localhost:5000"
}

app.use(cors(corOptions))

app.use(express.json)

app.use(express.urlencoded({extended:true}))