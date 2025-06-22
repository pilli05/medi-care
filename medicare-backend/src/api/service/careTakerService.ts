import careTakerRepository from "../repository/careTakerRepository";

const careTakerService = {
  getPatients: async (caretakerId: number): Promise<any> => {
    try {
      const patients = await careTakerRepository.getPatients(caretakerId);
      return patients;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default careTakerService;
