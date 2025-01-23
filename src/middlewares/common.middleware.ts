import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { isObjectIdOrHexString } from "mongoose";

import { ApiError } from "../errors/api-error";

class CommonMiddleware {
  public isIdValid(key: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[key];
        if (!isObjectIdOrHexString(id)) {
          throw new ApiError(`Invalid id [${key}]`, 404);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }
  public validateBody(validator: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const dto = req.body;
        if (!dto.name || dto.name.length < 3) {
          throw new ApiError(
            "Name is required and should be minimum 3 symbols",
            400,
          );
        }
        if (!dto.email || !dto.email.includes("@") || dto.email.length < 3) {
          throw new ApiError("Email is required", 400);
        }
        if (!dto.password || dto.password.length < 8) {
          throw new ApiError(
            "Password is required and should be minimum 8 symbols",
            400,
          );
        }
        req.body = dto;
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}
export const commonMiddleWare = new CommonMiddleware();
