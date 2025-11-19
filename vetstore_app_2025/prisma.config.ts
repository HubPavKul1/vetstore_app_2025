import { defineConfig } from "prisma/config";
import { config } from "dotenv";
import path from 'node:path'
import type { PrismaConfig } from 'prisma'

config()

export default defineConfig({
  // schema: "prisma/schema.prisma",
  schema: path.join('prisma'),
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // url: env("DATABASE_URL"),
    url: process.env.DATABASE_URL || ""
  },
} satisfies PrismaConfig);



