"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { z } from "zod";
import { actionClient } from "./safeAction";

const mailSchema = z.object({
  email: z.email(),
});

const requestPasswordReset = actionClient
  .inputSchema(mailSchema)
  .action(async ({ parsedInput: { email } }) => {
    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: "http://localhost:3000/admin/password-reset",
      },
      headers: await headers(),
    });
  });

export default requestPasswordReset;
