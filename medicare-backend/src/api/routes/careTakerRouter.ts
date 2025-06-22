import { Router } from "express";
import careTakerController from "../controller/careTakerController";

const careTakerRouter = Router();

careTakerRouter
  .route("/patients/:caretakerId")
  .get(careTakerController.getPatients);

export default careTakerRouter;
