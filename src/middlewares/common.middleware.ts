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
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = await validator.validateAsync(req.body);
        next();
      } catch (e: any) {
        next(new ApiError(e.message, 400));
      }
    };
  }
}
export const commonMiddleWare = new CommonMiddleware();
