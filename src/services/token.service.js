import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "15m" });

export const generateRefreshToken = (user)=> jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"7d"});