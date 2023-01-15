import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/Users.js";

/* Register User */
export const register = async(req, res) => {
    try{
        const{
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await brcrypt.genSalt();
        const passwordHash = await brcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            visualViewport: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000),
        });
        const saveUser = await newUser.save();
        res.status(201).josn(saveUser);

    } catch (err){
        res.status(500).josn({ error: err.message });
    }
}