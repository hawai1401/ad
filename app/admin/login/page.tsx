import AdminForm from "@/components/login/AdminForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Login() {
  return (
    <main className="flex justify-center items-center p-8 min-h-[calc(100vh-65px)]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Accéder au panel administrateur</CardTitle>
          <CardDescription>
            Entrez votre adresse mail et votre mot de passe ci-dessous afin de
            vous connecter.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminForm />
        </CardContent>
      </Card>
    </main>
  );
}
