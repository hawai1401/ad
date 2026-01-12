import ResetPassword from "@/components/email/PasswordReset";
import ResetPasswordSuccessfuly from "@/components/email/PasswordResetSuccessfuly";
import { User } from "better-auth";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResetPasswordMail(user: User, url: string) {
  await resend.emails.send({
    from: "Security <noreply@hawai1401.fr>",
    to: [user.email],
    subject: "Réinitialisation de votre mot de passe",
    react: ResetPassword(user.name, url),
  });
}

export async function sendResetPasswordSuccessMail(user: User) {
  await resend.emails.send({
    from: "Security <noreply@hawai1401.fr>",
    to: [user.email],
    subject: "Votre mot de passe a été modifié",
    react: ResetPasswordSuccessfuly(user.name),
  });
}
