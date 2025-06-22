A role-based Medication Management App for patients and caretakers, featuring medication tracking, adherence logging, and dashboard views.

Frontend Technologies:
--React, Tailwind CSS

Backend Technologies:
-- Node, ExpressJS, SQLite

Database:
-- SQLite (Tables - users, medications, medication_history, caretaker_patients)

Phase 1 (Implemented):
-- User Authentication (Login/Signup)
-- Role-based dashboards (Patient & Caretaker)
-- Medication CRUD (Add implemented manually, View, Mark as Taken)
-- SQLite integration for persistent data
-- Patient-Caretaker relationship
-- Form validation and error handling
-- Basic adherence calculation

Frontend Setup:
cd medicare-app
npm install
npm run dev

Backend Setup:
cd medicare-backend
npm install
npm run dev

Sql Queries:
cd medicare-backend
sqlite3 medicare.db

