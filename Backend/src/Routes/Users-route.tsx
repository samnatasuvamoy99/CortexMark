import { UserModel } from "../Db/db.js";
import jwt from 'jsonwebtoken';
import express from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
export const Userroute = express.Router();



const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

Userroute.post("/signup", async (req, res) => {
  try {
  
    const parsed = signupSchema.parse(req.body);


    const hashedPassword = await bcrypt.hash(parsed.password, 10);

   
    await UserModel.create({
      username: parsed.username,
      email: parsed.email,
      password: hashedPassword,
    });

    res.json({ message: "User signed up successfully 😊" });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Something went wrong during signup.", error });
  }
});

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
