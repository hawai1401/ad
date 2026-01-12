"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { z } from "zod";
import { actionClient } from "./safeAction";
import { returnValidationErrors } from "next-safe-action";

const passwordSchema = z.object({
  password: z.string().min(8),
  token: z.string(),
});

export const resetPassword = actionClient
  .inputSchema(passwordSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    try {
      await auth.api.resetPassword({
        body: {
          newPassword: password,
          token,
        },
        headers: await headers(),
      });
      return {
        success: "Mot de passe modifié avec succès !"
      }
    } catch {
      return returnValidationErrors(passwordSchema, {
        _errors: ["Token invalide, veuillez renvoyer une demande !"],
      });
    }
  });
