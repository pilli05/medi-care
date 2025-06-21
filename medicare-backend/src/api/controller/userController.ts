import db from "../../db/medicareDB";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { signUpValidation } from "../validation/signUpValidation";
import userService from "../service/userService";

const userController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const token = await userService.login(email, password);
      res.status(200).json({ message: "login successfull", token: token });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
  signup: async (req: Request, res: Response): Promise<void> => {
    const { error } = signUpValidation.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    }

    const { name, email, role, password } = req.body;

    try {
      await userService.signup(name, email, role, password);
      res.status(201).json({ message: "User created successfully" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
  getLoggedUserInfo: async (req: Request, res: Response): Promise<void> => {
    const token = req.headers["authorization"]?.split(" ")[1] as string;

    try {
      const user = await userService.getLoggedUserInfo(token);
      res.status(200).json({
        userData: { name: user.name, email: user.email, role: user.role },
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
};

export default userController;
