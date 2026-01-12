"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../animate-ui/components/buttons/button";
import { resetPassword } from "@/lib/editPassword";
import { useRouter } from "next/navigation";

export default function PasswordResetForm({ token }: { token: string }) {
  const [pending, setPending] = useState(false);
  const router = useRouter()
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setPending(true);

        toast.promise(
          new Promise<void>(async (res, rej) => {
            const formData = new FormData(e.currentTarget);
            const password = formData.get("password") as string;

            try {
              const { validationErrors, serverError } = await resetPassword({
                password,
                token,
              });

              if (validationErrors && !serverError)
                return rej(validationErrors._errors![0]);
              if (serverError) return rej("Une erreur est survenue !");
              res();
            } catch (err) {
              rej(err instanceof Error ? err.message : "Erreur inconnue");
            }
          }),
          {
            loading: "Réinitialisation en cours...",
            success: () => {
              router.push("/admin/login")
              return "Votre mot de passe a été modifié avec succès !";
            },
            error: (reason) => {
              setPending(false);
              return reason;
            },
          }
        );
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Nouveau mot de passe</Label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            name="password"
            minLength={8}
            required
            disabled={pending}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          Réinitialiser
        </Button>
      </div>
    </form>
  );
}
