import express from "express";
import {client}  from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("JAJAJAJ");
})

app.get("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const  user  = await client.user.create({
        data:{
            username:username,
            password:password
        }
    })
    res.json({
        message:"signup  successful",
        id:user.id
    })

    // res.send("JAJAJAJ");
})

app.listen(3005);