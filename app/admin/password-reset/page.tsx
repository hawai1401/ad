import PasswordResetForm from "@/components/login/PasswordResetForm";
import RequestPasswordResetForm from "@/components/login/RequestPasswordResetForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { passwordResetSearchParams } from "@/types/types";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default async function PasswordReset({
  searchParams,
}: {
  searchParams: Promise<passwordResetSearchParams>;
}) {
  const queries = await searchParams;
  if (!queries.token && !queries.error)
    return (
      <main className="flex justify-center items-center p-8 min-h-[calc(100vh-65px)]">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Mot de passe oublié</CardTitle>
            <CardDescription>
              Entrez votre adresse mail afin qu&apos;un email de
              réinitialisation de mot de passe vous soit envoyé.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RequestPasswordResetForm />
          </CardContent>
        </Card>
      </main>
    );
  if (queries.error === "INVALID_TOKEN")
    return (
      <main className="flex justify-center items-center p-8 min-h-[calc(100vh-65px)]">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Réinitialiser le mot de passe</CardTitle>
            <CardDescription>
              Le lien pour le réinitialiser le mot de passe est invalide !<br />
              Merci de refaire une demande de réinitialisation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={"/admin/password-reset"}>
              <Button className="w-full flex gap-2 items-center justify-center cursor-pointer">
                <LuSquareArrowOutUpRight size={20} />
                Refaire une demande
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    );
  return (
    <main className="flex justify-center items-center p-8 min-h-[calc(100vh-65px)]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Réinitialiser le mot de passe</CardTitle>
          <CardDescription>
            Entrez votre nouveau mot de passe ci-dessous.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordResetForm token={queries.token!} />
        </CardContent>
      </Card>
    </main>
  );
}
