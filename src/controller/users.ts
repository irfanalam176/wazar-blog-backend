import { Request, Response } from "express";
import { validateUser } from "../utils/zodAuth";

export const renderUser = (req: Request, res: Response) => {
  res.render("users", { currentPath: "users", title: "Users" });
};

export const addUserPage = (req: Request, res: Response) => {
    res.render("addUser",{title:"Add User"})
};

export const editUserPage = (req: Request, res: Response) => {
    res.render("editUser",{title:"Edit User"})
};

export const addUser = (req: Request, res: Response) => {
   const response = validateUser(req.body)
    if(response == true){
        res.send("working")
    }else{
        res.render("addUser",{errors:response,title:"Add Users"})
    }
};