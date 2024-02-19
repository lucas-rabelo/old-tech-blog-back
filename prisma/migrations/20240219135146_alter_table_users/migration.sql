/*
  Warnings:

  - A unique constraint covering the columns `[typeUserId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_typeUserId_key" ON "users"("typeUserId");
