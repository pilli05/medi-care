import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./medicare.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS medications (
      
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      dosage TEXT NOT NULL,
      frequency TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS medication_history (
      
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medication_id INTEGER NOT NULL,
      date_taken DATE NOT NULL,
      taken BOOLEAN DEFAULT 0,
      FOREIGN KEY (medication_id) REFERENCES medications(id)
      UNIQUE (medication_id, date_taken)
      )`);

  db.run(`CREATE TABLE IF NOT EXISTS caretaker_patients (
        
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        caretaker_id INTEGER,
        patient_id INTEGER,
        FOREIGN KEY (caretaker_id) REFERENCES users(id),
        FOREIGN KEY (patient_id) REFERENCES users(id)

        )`);
});

export default db;
