import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaDiscord } from "react-icons/fa";
import { cardColor } from "@/types/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function ServeurCard({
  title,
  description,
  variant,
  discord_link,
  website_link,
  className,
  ...props
}: {
  title: string;
  description: string;
  variant: cardColor;
  discord_link: string;
  website_link?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const gradiant: Record<cardColor, string> = {
    "orange-yellow": "from-orange-500 to-yellow-500",
    "green-blue": "from-green-400 to-blue-600",
    "blue-purple": "from-blue-700 to-purple-400",
  };
  const border: Record<cardColor, string> = {
    "orange-yellow": "orange-500",
    "green-blue": "green-500",
    "blue-purple": "purple-500",
  };
  return (
    <Card
      className={cn(`flex flex-col justify-between border-${border[variant]}`, className)}
      {...props}
    >
      <CardHeader>
        <hr
          className={`w-full h-2.5 rounded-full bg-linear-to-r ${gradiant[variant]} mb-2`}
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-3">
        <Link
          href={discord_link}
          className={`flex-1 w-full bg-linear-to-r ${gradiant[variant]} btn py-4 hover:scale-105 transition-all ease-in-out duration-300`}
        >
          <FaDiscord size={20} />
          Rejoindre Discord
        </Link>
        {website_link && (
          <Link
            href={website_link}
            className="flex-1 w-full btn py-4 hover:scale-105 transition-all ease-in-out duration-300"
          >
            <LuSquareArrowOutUpRight size={20} /> Visiter le site
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
