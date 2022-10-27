const express = require('express')
const app = express()
const mongoose = require('mongoose')

require("dotenv").config()



//!Database Connect
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//! Database Error/Success
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " mongo ain't workin"))
db.on('connected', () => console.log("mongo connected"))
db.on('disconnected', () => console.log('mongo disconnected'))

//MIDLEWARE
app.use(express.urlencoded({extended: true}))

//!Create
app.post("/keys", (req, res)=> {
    res.send("Welcome to keyboards")
})

//!listener
const PORT = process.env.PORT
app.listen(PORT, ()=> console.log('WE LIVIN'))