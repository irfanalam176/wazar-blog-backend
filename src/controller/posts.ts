import { Request,Response } from "express"
export const renderPosts=(req:Request,res:Response)=>{
    res.render("posts",{currentPath : "posts",title:"Posts"})
}

export const addBlogPage=(req:Request,res:Response)=>{
    res.render("addBlog",{title:"Add Blog"})
}

export const editBlogPage=(req:Request,res:Response)=>{
    res.render("editBlog",{title:"Edit Blog"})
}