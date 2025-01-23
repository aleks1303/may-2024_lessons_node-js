import dotenv from "dotenv";

dotenv.config(); // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені

export const config = {
  port: process.env.PORT || 3000,

  mongoUrl: process.env.MONGGO_URL || "mongodb://localhost:27017/express-mongo",
};
