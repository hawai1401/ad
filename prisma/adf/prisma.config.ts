import 'dotenv/config'
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/adf/schema.prisma',
  datasource: {
    url: env('ADF_DATABASE_URL'),
  },
});