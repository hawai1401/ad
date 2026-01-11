import { PrismaClient as AdPrismaClient } from "@/prisma/generated/ad/client/client";
import { PrismaClient as AdfPrismaClient } from "@/prisma/generated/adf/client/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const adDB = new AdPrismaClient({
  accelerateUrl: process.env.AD_DATABASE_URL!,
}).$extends(withAccelerate());

export const adfDB = new AdfPrismaClient({
  accelerateUrl: process.env.AD_DATABASE_URL!,
}).$extends(withAccelerate());
