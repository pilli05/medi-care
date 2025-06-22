import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = open({
  filename: "./medicare.db",
  driver: sqlite3.Database,
});

const careTakerRepository = {
  getPatients: async (caretakerId: number): Promise<any[]> => {
    const medicareDB = await db;
    const patients = await medicareDB.all(
      `SELECT users.id, users.name, users.email
   FROM users
   JOIN caretaker_patients ON users.id = caretaker_patients.patient_id
   WHERE caretaker_patients.caretaker_id = ?`,
      [caretakerId]
    );
    console.log(patients);
    return patients;
  },
};

export default careTakerRepository;
