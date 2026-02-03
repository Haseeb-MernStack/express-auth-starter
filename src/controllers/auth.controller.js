import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/user.model.js";
import { generateAccessToken } from "../services/token.service";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashed,
        verificationToken: crypto.randomBytes(32).toString("hex")
    });

    res.status(201).json({ message: "User registered. Verify email." });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateAccessToken(user);
    res.json({ token });
}
