// Dotenv
import { config } from "dotenv";
config();

export default {
  env: <string>process.env.NODE_ENV,
  db: {
    remote: <string>process.env.DB_REMOTE,
  },
  api_key: <string>process.env.API_KEY,
};
