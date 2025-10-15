import { UserModel } from "../Db/db.js";
import jwt from 'jsonwebtoken';
import express from "express";
export const Userroute = express.Router();



 Userroute.post("/signup",async (req, res) => {
  //zod validation  // and also using hasing method to hash the password the add the database 
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;


  try {
    await UserModel.create({
      username: username,
      email: email,
      password: password
    })

    res.json({
      message: "user signed up successfully😊"
    })

  } catch (error) {
    res.status(504).json({
      message: "Something went wrong during signup.",
      error: error
    });
  }

})


Userroute.post("/signin",async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  //find

  try {
    const exittingUser = await UserModel.findOne({
      email,
      password
    })

    console.log(exittingUser);

    if (!exittingUser) {
      res.status(403).json({
        message: " your emailid and password incorrect!!😒"
      })
    }

    if (exittingUser) {
      const token = jwt.sign(
        { id: exittingUser._id }, process.env.JWT_PASSWORD as string);

      res.json({
        message: " welcome Signin in successfully!",
        token
      });
      console.log(token);
    }

  }

  catch (err) {
    res.status(504).json({
      message: "your Information Invaild",
      error: err
    })
  }
})
