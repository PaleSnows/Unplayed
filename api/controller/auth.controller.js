import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ mesaage: "User created successfully!!!" });
  } catch (error) {
    next(errorHandler(500, "Error from server"));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const validUser = await User.findOne({ email });
  try {
    if (!validUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(400).json({ mesaage: "Invalid Credentials!!!" });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signOut = async(req,res)=>{
    try {
        res.clearCookie("access_token")
        res.status(200).json({message:"User has been logged out!"})
    } catch (error) {
        next(error)
    }
}