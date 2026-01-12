"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../animate-ui/components/buttons/button";
import requestPasswordReset from "@/lib/requestPasswordReset";

export default function RequestPasswordResetForm() {
  const [pending, setPending] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setPending(true);

        toast.promise(
          new Promise<void>(async (res, rej) => {
            const formData = new FormData(e.currentTarget);
            const email = formData.get("email") as string;

            try {
              const { validationErrors, serverError } =
                await requestPasswordReset({
                  email,
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
            loading: "Envoi en cours...",
            success: () => {
              return "Un mail de réinitalisation a été envoyé avec succès !";
            },
            error: (reason) => {
              setPending(false);
              return reason;
            },
          }
        );
      }}
    >
      <fieldset disabled={pending} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Addresse mail</Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="m@example.com"
            required
            disabled={pending}
          />
        </div>
        <Button type="submit" className="w-full">
          Réinitialiser
        </Button>
      </fieldset>
    </form>
  );
}
