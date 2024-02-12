/*
  Warnings:

  - You are about to drop the column `productId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "UserProducts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "UserProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProducts_userId_productId_key" ON "UserProducts"("userId", "productId");

-- AddForeignKey
ALTER TABLE "UserProducts" ADD CONSTRAINT "UserProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProducts" ADD CONSTRAINT "UserProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
