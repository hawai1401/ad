import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/animate-ui/components/buttons/button";
import ServeurCard from "@/components/Home/ServeurCard";
import DescriptionCard from "@/components/Home/DescriptionCard";

export const metadata: Metadata = {
  title: "Accueil",
  openGraph: {
    title: "Accueil",
  },
  twitter: {
    title: "Accueil",
  },
};

export default async function Home() {
  return (
    <main>
      <section
        id="accueil"
        className="scroll-mt-16.25 flex flex-col justify-center items-center gap-8 p-4 w-full h-[calc(100vh-65px)] bg-base-100"
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <Image
            src="/logo.webp"
            alt="logo"
            width="150"
            height="150"
            className="rounded-full border-3"
            preload
          />
          <h1 className="text-3xl mt-4 text-primary text-center font-semibold">
            <span className="bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Bienvenue sur Groupe AD
            </span>
          </h1>
          <p className="w-3/4 text-center">
            Le Groupe AD a pour mission de rassembler un maximum de serveurs
            Discord. Rejoignez notre communauté grandissante et découvrez nos
            serveurs dédiés aux fondateurs, développeurs et bien plus encore !
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link href="#serveurs">
            <Button
              size={"lg"}
              className="py-6 px-8 bg-base-200/70 font-normal bg-linear-to-r from-green-500 to-blue-500 rounded-lg"
              variant={"outline"}
            >
              Découvrir nos serveurs
            </Button>
          </Link>
          <Link href="https://discord.gg/qSfBRQWjJb" target="_blank">
            <Button
              size={"lg"}
              className="py-6 px-8 bg-base-200/70 font-normal rounded-lg"
              variant={"outline"}
            >
              Rejoindre le groupe
            </Button>
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="scroll-mt-16.25 flex flex-col gap-10 items-center p-10 w-full min-h-[calc(100vh-65px)] bg-base-200"
      >
        <h2 className="text-2xl text-secondary font-semibold">
          <span className="bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            À Propos du Groupe AD
          </span>
        </h2>
        <div className="hidden">
          <div className="border-green-400 text-green-400 bg-green-950/50" />
          <div className="border-orange-400 text-orange-400 bg-orange-950/50" />
          <div className="border-blue-400 text-blue-400 bg-blue-950/50" />
          <div className="border-purple-400 text-purple-400 bg-purple-950/50" />
        </div>
        <div className="container flex gap-6 flex-wrap">
          <DescriptionCard title="Notre mission" color="green">
            Le Groupe AD est une initiative ambitieuse visant à rassembler un
            maximum de serveurs Discord sous un même groupe.
          </DescriptionCard>
          <DescriptionCard title="Notre Vision" color="orange">
            Devenir le plus grand groupe de serveurs Discord. Unir différentes
            communautés Discord
          </DescriptionCard>
          <DescriptionCard title="Nos Valeurs" color="blue">
            Accompagnement, respect, courtoisie, gentillesse, entraide, mérite.
            Voici nos valeurs !
          </DescriptionCard>
          <DescriptionCard title="L'Histoire du Groupe" color="purple">
            Le Groupe AD a démarré avec une vision : unir différentes
            communautés Discord. Aujourd&apos;hui, nous comptons déjà 2 serveurs
            actifs plus notre serveur central, et nous continuons de grandir.
            <br />
            <br />
            Chaque serveur de notre groupe à un domaine précis. Ce qui permet
            d&apos;apporter de l&apos;aide plus facilement.
          </DescriptionCard>
        </div>
      </section>
      <section
        id="serveurs"
        className="scroll-mt-16.25 flex flex-col justify-around items-center gap-8 p-10 w-full min-h-[calc(100vh-65px)] bg-base-300"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">
            <span className="bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Nos Serveurs Discord
            </span>
          </h2>
          <p className="text-center">
            Découvrez nos différents serveurs, chacun avec sa propre communauté
            et ses objectifs uniques.
          </p>
        </div>
        <div className="hidden">
          <div className="border-orange-500" />
          <div className="border-green-500" />
          <div className="border-purple-500" />
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <ServeurCard
            title="Assemblée des Fondateurs"
            description="Le serveur principal pour tous les fondateurs. Rejoignez-nous pour
          partager vos idées et créer ensemble."
            variant="orange-yellow"
            discord_link="https://discord.gg/fehWrZs5aa"
            website_link="https://adf.hawai1401.fr"
          />
          <ServeurCard
            title="Assemblée des Développeurs"
            description="Un espace dédié aux développeurs pour collaborer, apprendre et partager leurs compétences."
            variant="green-blue"
            discord_link="https://discord.gg/fehWrZs5aa"
          />
          <ServeurCard
            title="Groupe AD"
            description="Le serveur central du groupe qui rassemble tous nos membres et coordonne nos activités."
            variant="blue-purple"
            discord_link="https://discord.gg/qSfBRQWjJb"
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>
      </section>
    </main>
  );
}
