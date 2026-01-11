"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { z } from "zod";
import { actionClient } from "./safeAction";
import { returnValidationErrors } from "next-safe-action";

const userSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

const signIn = actionClient
  .inputSchema(userSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      const session = await auth.api.signInEmail({
        body: {
          email: email,
          password: password,
          rememberMe: true,
        },
        headers: await headers(),
      });
      return { success: session.user.name };
    } catch {
      return returnValidationErrors(userSchema, {
        _errors: ["Email ou mot de passe invalide !"],
      });
    }
  });

export default signIn;
