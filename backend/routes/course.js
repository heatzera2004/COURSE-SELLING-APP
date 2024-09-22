import { Router } from 'express'

export const courseRouter = Router()

courseRouter.post("/purchase" , (req,res) => {
    res.json({
        message: "purchase endpoint"
    })
})

courseRouter.get("/preview" , (req,res) => {
    res.json({
        message: "preview courses"
    })
})
