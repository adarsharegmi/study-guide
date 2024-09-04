import "express";
import { DecodedIdToken } from "./core/auth";

declare global {
  namespace Express {
    interface Request {
      token: DecodedIdToken | null;
    }
  }
}
