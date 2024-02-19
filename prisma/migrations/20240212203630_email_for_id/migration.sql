-- DropForeignKey
ALTER TABLE "UserProducts" DROP CONSTRAINT "UserProducts_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserProducts" ADD CONSTRAINT "UserProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
