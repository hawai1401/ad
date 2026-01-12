import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { adDB } from "./prisma";
import { sendResetPasswordMail, sendResetPasswordSuccessMail } from "./ressend";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({user, url}) => {
      void sendResetPasswordMail(user, url);
    },
    onPasswordReset: async ({ user }) => {
      void sendResetPasswordSuccessMail(user)
    },
  },
  database: prismaAdapter(adDB, {
    provider: "postgresql",
  }),
});
