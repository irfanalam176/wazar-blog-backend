import { Router,Request } from "express";
import { addUser, addUserPage, deleteUser, editUserPage, renderUser } from "../controller";
import multer,{FileFilterCallback } from "multer";
const users = Router()
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
    // Accept images only
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
    } else {
        // cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'), false);
    }
};
const upload = multer({storage:multer.memoryStorage(),fileFilter:fileFilter})
users.get("/",renderUser)

users.get("/add-user",addUserPage)
users.get("/edit-user",editUserPage)

users.post("/add-user",upload.single("userImage"),addUser)
users.delete("/delete-user/:id",deleteUser)

export default users