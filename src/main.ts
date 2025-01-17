import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./errors/api-error";
import { userRouter } from "./routers/user.router";

dotenv.config(); // {path: '.env'} можна прописати шлях, якщо файл конфігурації лежить не в корені
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// всі запити треба класти в try-catch
app.use("/users", userRouter);
// app.get(
//   "/users",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const users = await read();
//       res.json(users);
//     } catch (e) {
//       next(e);
//     }
//   },
// );
//
// // додаємо user
//
// app.post(
//   "/users",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       if (!req.body.name || req.body.name.length < 4) {
//         throw new ApiError(
//           "Name is required and should be minimum 3 symbols",
//           400,
//         );
//       }
//       if (!req.body.email || !req.body.email.includes("@")) {
//         throw new ApiError("Email is required", 400);
//       }
//       if (!req.body.password || req.body.password.length < 7) {
//         throw new ApiError(
//           "Password is required and should be minimum 8 symbols",
//           400,
//         );
//       }
//       const users = await read();
//       const newUser = {
//         id: users.length ? users[users.length - 1].id + 1 : 1,
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       };
//       users.push(newUser);
//       await write(users);
//       res.status(201).json(newUser);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

// знаходимо user по id
// app.get(
//   "/users/:userId",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const users = await read();
//       const user = users.find((user) => user.id === Number(req.params.userId));
//       if (!user) {
//         throw new ApiError("User not found", 404);
//       }
//       res.json(user);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

// // update
// app.put(
//   "/users/:userId",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       if (!req.body.name || req.body.name.length < 3) {
//         throw new ApiError(
//           "Name is required and should be minimum 3 symbols",
//           400,
//         );
//       }
//       if (
//         !req.body.email ||
//         !req.body.email.includes("@") ||
//         req.body.email.length < 3
//       ) {
//         throw new ApiError("Email is required", 400);
//       }
//       if (!req.body.password || req.body.password.length < 8) {
//         throw new ApiError(
//           "Password is required and should be minimum 8 symbols",
//           400,
//         );
//       }
//
//       const users = await read();
//       const index = users.findIndex(
//         (user: { id: number }) => user.id === Number(req.params.userId),
//       );
//       if (index === -1) {
//         throw new ApiError("User not found", 404);
//       }
//       const user = users[index];
//       user.name = req.body.name;
//       user.email = req.body.email;
//       user.password = req.body.password;
//
//       await write(users);
//       res.status(201).json(user);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

//
// // видаляємо user

// app.delete(
//   "/users/:userId",
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const users = await read();
//       const index = users.findIndex(
//         (user) => user.id === Number(req.params.userId),
//       );
//       if (index === -1) {
//         throw new ApiError("User not found", 404);
//       }
//       users.splice(index, 1);
//       await write(users);
//       res.sendStatus(204);
//     } catch (e) {
//       next(e);
//     }
//   },
// );

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
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
