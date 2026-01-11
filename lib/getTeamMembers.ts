"use server";

import { TeamRole } from "@/types/enum";
import { guildMember } from "@/types/types";

export async function getTeamMembers(): Promise<Record<string, guildMember[]>> {
  const members: guildMember[] = await fetch(
    `https://discord.com/api/v10/guilds/1456366724806082562/members?limit=1000`,
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 * 10, tags: ["teamMembers"] },
    }
  ).then((res) => res.json());

  const value = {
    president: members.filter((u) => u.roles.includes(TeamRole.President)),
    vicePresident: members.filter((u) =>
      u.roles.includes(TeamRole.VicePresident)
    ),
    directeurGeneral: members.filter((u) =>
      u.roles.includes(TeamRole.DirecteurGeneral)
    ),
    directeurRH: members.filter((u) => u.roles.includes(TeamRole.DirecteurRH)),
    directeurComunication: members.filter((u) =>
      u.roles.includes(TeamRole.DirecteurCommunication)
    ),
    gerant: members.filter((u) => u.roles.includes(TeamRole.Gerant)),
  };

  return value;
}
