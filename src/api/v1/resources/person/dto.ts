import { Document } from "mongoose";

export default interface IPersonDoc extends Document {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  namespace Person {
    interface ICreatePerson {
      firstName: string;
      lastName: string;
      age: string;
      hobbies: string[];
    }
    interface IUpdatePerson {
      firstName?: string;
      lastName?: string;
      age?: string;
    }
  }
}
