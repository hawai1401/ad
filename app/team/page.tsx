import StaffCard from "@/components/team/StaffCard";
import { getTeamMembers } from "@/lib/getTeamMembers";
import { adDB } from "@/lib/prisma";
import { cn } from "@/lib/utils";

import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const teamMembers = await getTeamMembers();
  const defaultMetadata = await parent;

  const usernames: string[] = [];

  for (const key in teamMembers) {
    if (!Object.hasOwn(teamMembers, key)) continue;

    const members = teamMembers[key];

    usernames.push(...members.map((u) => u.user.username));
  }

  return {
    title: "Équipe",
    description: "Voici les différents membres de notre équipe.",
    openGraph: {
      title: "Équipe",
      description: "Voici les différents membres de notre équipe.",
      url: `https://ad.hawai1401.fr/team`,
    },
    twitter: {
      title: "Équipe",
      description: "Voici les différents membres de notre équipe.",
    },
    keywords: [
      ...defaultMetadata.keywords!,
      "Équipe",
      "Staff",
      "Gérant",
      "Président",
      "Directeur",
      ...usernames,
    ],
  };
}

export default async function Team() {
  const teamMembers = await getTeamMembers();
  const users = await adDB.userBio.findMany({
    cacheStrategy: {
      ttl: 60 * 60,
      swr: 60,
    },
  });

  return (
    <main className="scroll-mt-16.25 min-h-[calc(100vh-65px)] bg-base-200 p-8 flex flex-col gap-30">
      <div className="flex flex-col gap-4 text-center bg-base-300 py-10 shadow-xl rounded-xl">
        <h1 className="text-5xl font-semibold">Équipe</h1>
        <p className="text-xl opacity-80">
          Voici les différents membres de notre équipe.
        </p>
      </div>
      <div className="hidden">
        <div className="border-purple-300 bg-purple-500/10">
          <div className="bg-purple-500" />
          <div className="bg-purple-500/50" />
        </div>
        <div className="border-sky-300 bg-sky-500/10">
          <div className="bg-sky-500" />
          <div className="bg-sky-500/50" />
        </div>
        <div className="border-emerald-300 bg-emerald-500/10">
          <div className="bg-emerald-500" />
          <div className="bg-emerald-500/50" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-purple-500 bg-base-300 shadow-xl p-4 rounded-xl font-semibold">
          Présidence
        </h2>
        <div
          className={cn(
            "container grid justify-center items-center flex-wrap gap-8",
            teamMembers.president.length + teamMembers.vicePresident.length >=
              2 && "sm:grid-cols-2",
            teamMembers.president.length + teamMembers.vicePresident.length >=
              3 && "lg:grid-cols-3"
          )}
        >
          {teamMembers.president.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="purple"
              role="Président"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
          {teamMembers.vicePresident.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="purple"
              role="Vice Président"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-sky-500 bg-base-300 shadow-xl p-4 rounded-xl font-semibold">
          Direction
        </h2>
        <div
          className={cn(
            "container grid justify-center items-center flex-wrap gap-8",
            teamMembers.directeurGeneral.length +
              teamMembers.directeurRH.length +
              teamMembers.directeurComunication.length >=
              2 && "sm:grid-cols-2",
            teamMembers.directeurGeneral.length +
              teamMembers.directeurRH.length +
              teamMembers.directeurComunication.length >=
              3 && "lg:grid-cols-3"
          )}
        >
          {teamMembers.directeurGeneral.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="sky"
              role="Directeur Géneral"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
          {teamMembers.directeurRH.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="sky"
              role="Directeur RH"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
          {teamMembers.directeurComunication.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="sky"
              role="Directeur Communication"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl text-center text-emerald-500 shadow-xl bg-base-300 p-4 rounded-xl font-semibold">
          Gestion
        </h2>
        <div
          className={cn(
            "container grid justify-center items-center flex-wrap gap-8",
            teamMembers.president.length + teamMembers.vicePresident.length >=
              2 && "sm:grid-cols-2",
            teamMembers.president.length + teamMembers.vicePresident.length >=
              3 && "lg:grid-cols-3"
          )}
        >
          {teamMembers.directeurComunication.map((u) => (
            <StaffCard
              key={u.user.id}
              user={u.user}
              color="emerald"
              role="Gérant"
              description={users.find((v) => v.id === u.user.id)?.bio}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
