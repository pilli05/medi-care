import bcrypt from "bcrypt";
import userRepository from "../repository/userRepository";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mysecretjsonwebtokenkey";

const userService = {
  signup: async (
    name: string,
    email: string,
    role: string,
    password: string
  ): Promise<void> => {
    const userExists = await userRepository.existsByEmail(email);
    if (userExists) {
      throw new Error("User already exists!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepository.signup(name, email, role, hashedPassword);
  },

  login: async (email: string, password: string): Promise<string> => {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error("User not found!");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password!");
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    return token;
  },
};

export default userService;
