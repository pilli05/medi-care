import { Router } from "express";
import medicationController from "../controller/medicationController";

const medicationRouter = Router();

medicationRouter
  .route("/getaAllMedications")
  .get(medicationController.getAllMedications);

medicationRouter.route("/markAsDone").post(medicationController.markAsDone);

medicationRouter.route("/getHistory").get(medicationController.getHistory);

export default medicationRouter;
