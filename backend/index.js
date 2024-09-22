import express from 'express'

const app = express()
app.use(express.json())

app.post("/user/signup" , (req,res) => {
    res.json({
        message: "signnup endpoint"
    })
})

app.post("/user/signin" , (req,res) => {
    res.json({
        message: "signin endpoint"
    })
})

app.get("/user/purchases" , (req,res) => {
    res.json({
        message: "signnup endpoint"
    })
})

app.post("/course/purchase" , (req,res) => {
    res.json({
        message: "purchase endpoint"
    })
})

app.get("/courses" , (req,res) => {
    res.json({
        message: "courses"
    })
})

app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');
})