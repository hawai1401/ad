import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function EmailTemplate(name: string) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Votre mot de passe a été modifié</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#7c3aed",
              },
            },
          },
        }}
      >
        <Body className="bg-gray-700 font-sans">
          <Container className="mx-auto my-10 max-w-md rounded-lg bg-gray-800 shadow-xl">
            <Container className="m-10 w-[calc(100%-80px)]">
              <Section>
                <Text className="text-xl font-semibold text-white">
                  Mot de passe modifié avec succès
                </Text>

                <Text className="mt-4 text-white">Bonjour {name},</Text>

                <Text className="mt-2 text-white">
                  Nous confirmons que votre mot de passe a été réinitialisé avec
                  succès.
                </Text>

                <Text className="mt-2 text-white">
                  Si vous êtes à l’origine de cette action, aucune autre
                  démarche n’est nécessaire.
                </Text>

                <Hr className="my-6 border-gray-200" />

                <Text className="mt-2 text-white">
                  Si vous n’êtes pas à l’origine de cette modification, veuillez
                  réinitialiser immédiatement votre mot de passe !
                </Text>

                <Section className="my-6 text-center">
                  <Button
                    href={"https://ad.hawai1401.fr/admin/password-reset"}
                    className="rounded-md bg-brand px-6 py-3 text-white font-medium"
                  >
                    Réinitialiser mon mot de passe
                  </Button>
                </Section>

                <Text className="text-sm text-white">
                  Pour des raisons de sécurité, nous ne partageons jamais votre
                  mot de passe par email.
                </Text>

                <Hr className="my-6 border-gray-200" />

                <Text className="text-xs text-white">
                  Si le bouton ne fonctionne pas, copiez ce lien dans votre
                  navigateur :
                </Text>

                <Text className="break-all text-xs text-sky-200">
                  <a href="https://ad.hawai1401.fr/admin/password-reset">
                    https://ad.hawai1401.fr/admin/password-reset
                  </a>
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
