import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { app } from "../core/app.js";

/**
 * Authenticates the user with an email address and a one-time code (OTP).
 */
export const handler = app.post(
  "/api/login",

  // Validate the request body using Zod
  zValidator(
    "json",
    z.object({
      email: z.string({
        required_error: "Email is required",
      }),
      code: z.string().optional(),
    }),
  ),

  // Handle the request
  ({ req, json }) => {
    const input = req.valid("json");
    // TODO: Implement the login logic
    return json<LoginResponse>({ email: input.email });
  },
);

export type LoginHandler = typeof handler;
export type LoginResponse = {
  email: string;
};
