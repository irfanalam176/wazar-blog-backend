import { Request,Response } from "express"
export const renderPosts=(req:Request,res:Response)=>{
    res.render("posts",{currentPath : "posts",title:"Posts"})
}