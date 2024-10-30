import IPersonDoc from "../dto";
import PersonModel from "../model";

export default class CPersonService {
  static async createPerson(data: Person.ICreatePerson): Promise<IPersonDoc> {
    try {
      const person = await PersonModel.create(data);
      return person;
    } catch (error) {
      throw error;
    }
  }

  static async updatePerson(
    id: string,
    data: Person.IUpdatePerson
  ): Promise<IPersonDoc | null> {
    try {
      const person = await PersonModel.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
      });
      return person;
    } catch (error) {
      throw error;
    }
  }

  static async deletePerson(id: string): Promise<IPersonDoc | null> {
    try {
      const person = await PersonModel.findByIdAndDelete(id);
      return person;
    } catch (error) {
      throw error;
    }
  }
}
