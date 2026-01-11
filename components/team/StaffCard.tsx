import { role, staffCardColor, user } from "@/types/types";
import Image from "next/image";

export default function StaffCard({
  user,
  color,
  role,
  description,
}: {
  user: user;
  color: staffCardColor;
  role: role;
  description?: string | undefined;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 border-2 border-${color}-300 rounded-box p-8 bg-${color}-500/10 hover:scale-105 transition duration-300`}
    >
      <div className="flex items-center gap-2">
        <Image
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
          width={50}
          height={50}
          alt={`${user.username}'s avatar`}
          className={`rounded-full border-2 border-${color}-300`}
        />
        <span>{user.username}</span>
      </div>
      <hr className={`w-full h-1 bg-${color}-500 rounded-full`} />
      <div
        className={`rounded-full border-${color}-300 bg-${color}-500/50 border-2 px-4 py-1 font-semibold`}
      >
        {role}
      </div>
      <hr className={`w-full h-1 bg-${color}-500 rounded-full`} />
      <p>
        {description ?? <span className="italic">Aucune biographie.</span>}
      </p>
    </div>
  );
}
