import dotenv from "dotenv";

dotenv.config(); // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені

export const config = {
  port: process.env.PORT || 3000,

  mongoUrl: process.env.MONGGO_URL || "mongodb://localhost:27017/express-mongo",

  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
};
