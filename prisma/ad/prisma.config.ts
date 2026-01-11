import 'dotenv/config'
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/ad/schema.prisma',
  migrations: {
    path: 'prisma/ad/migrations/ad',
  },
  datasource: {
    url: env('AD_DATABASE_URL'),
  },
});