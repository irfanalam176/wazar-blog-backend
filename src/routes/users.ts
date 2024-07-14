import { Router,Request,Response } from "express";
import { addUser, addUserPage, editUserPage, renderUser } from "../controller";
const users = Router()
users.get("/",renderUser)

users.get("/addUser",addUserPage)
users.get("/editUser",editUserPage)

users.post("/addUser",addUser)

export default users