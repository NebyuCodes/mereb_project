import { model } from "mongoose";
import schema from "./schema";
import IPersonDoc from "./dto";

export default model<IPersonDoc>("Person", schema);
