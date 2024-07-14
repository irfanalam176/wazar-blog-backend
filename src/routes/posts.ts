import { Router,Request,Response } from "express";
import { renderPosts } from "../controller";
const posts = Router()
posts.get("/",renderPosts)

posts.get("/addBlog",(req:Request,res:Response)=>{
    res.render("addBlog",{title:"Add Blog"})
})
posts.get("/editBlog",(req:Request,res:Response)=>{
    res.render("editBlog",{title:"Edit Blog"})
})

export default posts