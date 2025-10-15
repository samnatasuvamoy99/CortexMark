import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = ( req:Request , res:Response , next:NextFunction) =>{

  const authHeader=req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  

   try{
      const decoded = jwt.verify(authHeader as string , process.env.JWT_PASSWORD as string);
       if (decoded) {
      // @ts-ignore
      req.userId = decoded.id;
      next();
  }
   
}
   catch(err){
        res.status(403).json({
          message: "you are not logged in"
      });
   }
     
  }

