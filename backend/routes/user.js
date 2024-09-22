import express from 'express'

const Router = express.Router()

export const userRouter = Router();

userRouter.post("/signup" , (req,res) => {
    res.json({
        message: "signnup endpoint"
    })
})

userRouter.post("/signin" , (req,res) => {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/purchases" , (req,res) => {
    res.json({
        message: "signnup endpoint"
    })
})

