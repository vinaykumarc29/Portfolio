const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();



app.use(cors({
    origin: "http://localhost:5000/contact", // Replace with your frontend URL
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const transporter = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user: process.env.USER,
        pass: process.env.PASS
    }
});

app.post("/contact",async(req,res)=>{
    console.log("Request body:", JSON.stringify(req.body)); 
    const { name,email,message } = req.body;

    try{
        await transporter.sendMail({
            from:email,
            to:"vinaygamer681@gmail.com",
            subject: `New portfoilo request from ${name} `,
            text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
           

        });
        res.json({success: true, message: "message send successfully!!"})
    }catch(error){
        console.log(error);
        res.json({success: true, message: "message send successfully!!"})
    }
})


app.listen(5000,()=>{
    console.log("Server Started !!")
})