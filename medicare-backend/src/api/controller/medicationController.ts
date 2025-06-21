import { Request, Response } from "express";
import medicationService from "../service/medicationService";

const medicationController = {
  getAllMedications: async (req: Request, res: Response) => {
    try {
      const medications = await medicationService.getAllMedications();
      res.status(200).json(medications);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  markAsDone: async (req: Request, res: Response) => {
    const { medicationId, date_taken } = req.body;
    try {
      await medicationService.markAsDone(medicationId, date_taken);
      res.status(200).json({ message: "Medication marked as done" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  getHistory: async (req: Request, res: Response) => {
    try {
      const { date } = req.query as { date: string };
      const history = await medicationService.getHistory(date);
      res.status(200).json(history);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
};

export default medicationController;
