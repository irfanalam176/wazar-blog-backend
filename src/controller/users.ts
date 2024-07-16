import { Request, Response } from "express";
import { validateUser } from "../utils/zodAuth";
import { addUserSQL, deleteUserSQL, getUsers, isUserExist } from "../model/sql/sql";
import { AddUser } from "../types/queryType";

export const renderUser = async (req: Request, res: Response) => {
  const userData = await getUsers();
  res.render("users", {
    currentPath: "users",
    title: "Users",
    userData: userData,
  });
};

export const addUserPage = (req: Request, res: Response) => {
  res.render("addUser", { title: "Add User" });
};

export const editUserPage = (req: Request, res: Response) => {
  res.render("editUser", { title: "Edit User" });
};

export const addUser = async (req: Request, res: Response) => {
  const userImage = req.file?.buffer.toString("base64");
  const imageType = req.file?.mimetype.toString();
  const response = validateUser(req.body);
  const checkUser = await isUserExist(req.body.userEmail);

  if (checkUser == true) {
    res.render("addUser", {
      error: "User Already Exist !",
      title: "Add Users",
    });
  } else if (response == true) {
    const { userName, userEmail, userPassword, userRole } = req.body;
    const userCredintials: AddUser = {
      userName,
      userEmail,
      userPassword,
      userRole,
      userImage,
      imageType,
    };
    const isUserAdded = addUserSQL(userCredintials);
    if ((await isUserAdded) == true) {
      res.redirect("/users");
    }
  } else {
    res.render("addUser", { errors: response, title: "Add Users" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
    const isDelete = await deleteUserSQL(req.params?.id)
    
    if(isDelete === true){
        res.json({status:true})
    }
};
