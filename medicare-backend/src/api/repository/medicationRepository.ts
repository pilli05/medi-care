import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = open({
  filename: "./medicare.db",
  driver: sqlite3.Database,
});

const medicationRepository = {
  getAllMedications: async (): Promise<any[]> => {
    const medicareDB = await db;
    const medications = await medicareDB.all("SELECT * FROM medications");
    return medications;
  },

  markAsDone: async (
    medication_id: number,
    date_taken: string
  ): Promise<void> => {
    const medicareDB = await db;

    const existingLog = await medicareDB.get(
      `SELECT * FROM medication_history WHERE medication_id = ? AND date_taken = ?`,
      [medication_id, date_taken]
    );

    if (existingLog) {
      await medicareDB.run(
        `UPDATE medication_history SET taken = 1 WHERE medication_id = ? AND date_taken = ?`,
        [medication_id, date_taken]
      );
    } else {
      await medicareDB.run(
        `INSERT INTO medication_history (medication_id, date_taken, taken) VALUES (?, ?, 1)`,
        [medication_id, date_taken]
      );
    }
  },

  getHistory: async (date?: string): Promise<any[]> => {
    const medicareDB = await db;
    const history = await medicareDB.all(`SELECT * FROM medication_history `);
    return history;
  },
};

export default medicationRepository;
