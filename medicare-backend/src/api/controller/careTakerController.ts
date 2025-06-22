import { Request, Response } from "express";
import careTakerService from "../service/careTakerService";

const careTakerController = {
  getPatients: async (req: Request, res: Response) => {
    const { caretakerId } = req.params;
    try {
      const patients = await careTakerService.getPatients(Number(caretakerId));
      console.log(patients);
      res.status(200).json(patients);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  },
};

export default careTakerController;
