-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('SUPPLIER', 'CLINIC');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "shortTitle" TEXT,
    "type" "CompanyType" NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
