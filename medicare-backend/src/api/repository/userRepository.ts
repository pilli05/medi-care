import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = open({
  filename: "./medicare.db",
  driver: sqlite3.Database,
});

const userRepository = {
  existsByEmail: async (email: string): Promise<boolean> => {
    const medicareDB = await db;
    const user = await medicareDB.get("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return !!user;
  },

  findByEmail: async (email: string): Promise<any> => {
    const medicareDB = await db;
    const user = await medicareDB.get("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return user;
  },

  signup: async (
    name: string,
    email: string,
    role: string,
    password: string
  ): Promise<void> => {
    const medicareDB = await db;
    await medicareDB.run(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role]
    );
  },
};

export default userRepository;
