import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res , next) => {
  try {
    const user = await prisma.user.findMany({
      omit:{
        password:true
      }
    })
    console.log(user)
      // 1. Check Email

      res.json({ message: "This is List All User",      
      message:"This is List All User",
      result: user
});
  } catch (error) {
    next(error);

  }
};

export const updateRoleUser = async(req, res) => {
  try {
    const {id} = req.params;
    const {role} = req.body;
    console.log(id , role);

    const user = await prisma.user.update({
      where:{
        id:Number(id)
      },
      data:{
        role:role
      }
    })


    res.json({ message: `Update Role ${user.name}` });
    
  } catch (error) {
    next(error)
  }
};
export const deleteUser = (req, res,next) => {

  try {
    
    res.json({ message: "This is Delete User" });
  } catch (error) {
    next(error)
  }
};


export const readUser = (req, res) => {
    res.json({ message: "This is Read User" });

};

export const createUser = (req, res) => {    
      res.json({ message: "This is POST User" });
};