"use client";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import signIn from "@/lib/signIn";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminForm() {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setPending(true);

        toast.promise(
          new Promise<string>(async (res, rej) => {
            const formData = new FormData(e.currentTarget);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            try {
              const { data, validationErrors, serverError } = await signIn({
                email,
                password,
              });

              if (validationErrors && !serverError)
                return rej(validationErrors._errors![0]);
              if (serverError) return rej("Une erreur est survenue !");
              res(data!.success);
            } catch (err) {
              rej(err instanceof Error ? err.message : "Erreur inconnue");
            }
          }),
          {
            loading: "Connexion en cours...",
            success: (name) => {
              router.push("/admin/dashboard");
              return `Bienvenue ${name}`;
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
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Mot de passe</Label>
            <Link
              href="/admin/password-reset"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Input
            id="password"
            minLength={8}
            type="password"
            name="password"
            autoComplete="current-password"
            required
            disabled={pending}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          Se connecter
        </Button>
      </div>
    </form>
  );
}
