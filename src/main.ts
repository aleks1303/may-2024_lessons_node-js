import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/config";
import { ApiError } from "./errors/api-error";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// всі запити треба класти в try-catch
app.use("/users", userRouter);

app.use(
  "*",
  (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status ?? 500;
    const message = error.message ?? "Something went wrong";
    // console.log("Error", error.message);
    res.status(status).json({ status, message });
  },
);

// якщо є методи які не оброблені перевірками, тоді цей код ловить їх тут
process.on("uncaughtException", (error) => {
  console.error("uncaught Exception:", error);
  process.exit(1);
});

// CRUD
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// create users -> users method (POST);
// get-list-users -> users method (POST);
// get-user-by-id -> user/:id method (POST);
// update-user -> user/:id method (PUT);
// delete-user -> user/:id method (DELETE);

// console.log(config.mongoUrl);
app.listen(config.port, async () => {
  await mongoose.connect(config.mongoUrl);
  console.log(`Server has been started on port ${config.port}`);
});
