import medicationRepository from "../repository/medicationRepository";

const medicationService = {
  getAllMedications: async (): Promise<any> => {
    try {
      const medications = await medicationRepository.getAllMedications();
      return medications;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },

  markAsDone: async (
    medication_id: number,
    date_taken: string
  ): Promise<void> => {
    try {
      await medicationRepository.markAsDone(medication_id, date_taken);
    } catch (err: any) {
      throw new Error(err.message);
    }
  },

  getHistory: async (date: string): Promise<any> => {
    try {
      const history = await medicationRepository.getHistory(date);
      return history;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default medicationService;
