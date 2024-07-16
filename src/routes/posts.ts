import { Router,Request,Response } from "express";
import { addBlogPage, editBlogPage, renderPosts } from "../controller";
const posts = Router()
posts.get("/",renderPosts)

posts.get("/add-blog",addBlogPage)
posts.get("/edit-blog",editBlogPage)

export default posts