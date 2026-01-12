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

export default function EmailTemplate(name: string, url: string) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Réinitialisation de votre mot de passe</Preview>

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
                  Réinitialisation du mot de passe
                </Text>

                <Text className="mt-4 text-white">Bonjour {name},</Text>

                <Text className="mt-2 text-white">
                  Vous avez demandé la réinitialisation de votre mot de passe.
                  Cliquez sur le bouton ci-dessous pour continuer.
                </Text>

                <Section className="my-6 text-center">
                  <Button
                    href={url}
                    className="rounded-md bg-brand px-6 py-3 text-white font-medium"
                  >
                    Réinitialiser mon mot de passe
                  </Button>
                </Section>

                <Text className="text-sm text-white">
                  Si vous n’êtes pas à l’origine de cette demande, ignorez cet
                  email.
                </Text>

                <Hr className="my-6 border-gray-200" />

                <Text className="text-xs text-white">
                  Si le bouton ne fonctionne pas, copiez ce lien dans votre
                  navigateur :
                </Text>

                <Text className="break-all text-xs text-sky-200">{url}</Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
