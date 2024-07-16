import { v4 as uuidv4 } from "uuid";
import { AddUser } from "../../types/queryType";
import db from "../connection/db";

export const addUserSQL = (userCredintials: AddUser): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const {
      userName,
      userEmail,
      userPassword,
      userRole,
      userImage,
      imageType,
    } = userCredintials;
    const userId = uuidv4();
    const imageId = uuidv4();
    const sql = "CALL addUser(?,?,?,?,?)";
    const imageSql = "CALL userImage(?,?,?,?)";

    db.query(
      sql,
      [userId, userName, userEmail, userPassword, userRole],
      (err, response) => {
        if (err) {
          console.log("Could not add data to the table: " + err);
          reject(err);
        } else {
          if (response.affectedRows > 0) {
            db.query(
              imageSql,
              [imageId, userImage, imageType, userId],
              (imgError, imgResponse) => {
                if (imgError) {
                  console.log(
                    "Could not add image data to the table: " + imgError
                  );
                  reject(imgError);
                } else {
                  if (imgResponse.affectedRows > 0) {
                    resolve(true);
                  } else {
                    resolve(false);
                  }
                }
              }
            );
          } else {
            resolve(false);
          }
        }
      }
    );
  });
};

export const isUserExist = (userEmail:string):Promise<boolean>=>{
  return new Promise((resolve,reject)=>{
    const sql = "CALL isUserExist(?)"
  db.query(sql,[userEmail],(err,response)=>{
    if(err){
      console.log(err);
      reject(false)
    }else{
      if(response[0].length > 0){
        resolve(true)
      }else{
        resolve(false)
      }
    }
  })
  })
}

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = "CALL getUsers()";
   db.query(sql, (err, response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response[0])
      }
    });
  });
};

export const deleteUserSQL=(userId:string):Promise<boolean>=>{
  return new Promise((resolve,reject)=>{
    const sql ="CALL deleteUser(?)"
    db.query(sql,[userId],(err,response)=>{
      if(err){
        console.log(err);
      }else{
        if(response.affectedRows > 0){
          resolve(true)
        }
      }
    })
  })
}