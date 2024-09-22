import express from 'express'

const Router = express.Router();

export const courseRouter = Router()

courseRouter.post("/purchase" , (req,res) => {
    res.json({
        message: "purchase endpoint"
    })
})

courseRouter.get("/preview" , (req,res) => {
    res.json({
        message: "courses"
    })
})