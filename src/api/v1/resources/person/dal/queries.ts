import APIFeatures from "../../../../../utils/api_features";
import IPersonDoc from "../dto";
import PersonModel from "../model";

export default class QPersonService {
  static async getAllPersons(
    query?: RequestQuery
  ): Promise<{ persons: IPersonDoc[]; results: number }> {
    try {
      const apiFeatures = new APIFeatures<IPersonDoc>(PersonModel.find(), query)
        .filter()
        .sort()
        .project()
        .paginate();
      const persons = await apiFeatures.dbQuery;
      const results = await PersonModel.countDocuments();
      return { persons, results };
    } catch (error) {
      throw error;
    }
  }

  static async getPerson(id: string): Promise<IPersonDoc | null> {
    try {
      const person = await PersonModel.findById(id);
      return person;
    } catch (error) {
      throw error;
    }
  }
}
