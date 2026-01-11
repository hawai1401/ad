export type field = { name: string; value: string; inline?: boolean };
export type cardColor = "orange-yellow" | "green-blue" | "blue-purple";
export type descriptionCardColor = "green" | "orange" | "blue" | "purple";
export type staffCardColor = "purple" | "sky" | "emerald";
export type role =
  | "Président"
  | "Vice Président"
  | "Directeur Géneral"
  | "Directeur RH"
  | "Directeur Communication"
  | "Gérant";

export interface user {
  id: string;
  username: string;
  avatar: string | null;
  public_flags: number;
  flags: number;
  banner: string | null;
  accent_color: number;
  global_name: string;
  banner_color: `#${number}`;
}

export interface guildMember {
  joined_at: Date;
  nick: null | string;
  roles: string[];
  user: user;
}
