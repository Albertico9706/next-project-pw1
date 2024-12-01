/*
  Warnings:

  - You are about to alter the column `pubDate` on the `job` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `job` MODIFY `jobExcerpt` TEXT NOT NULL,
    MODIFY `jobDescription` TEXT NOT NULL,
    MODIFY `pubDate` DATETIME(3) NOT NULL;
