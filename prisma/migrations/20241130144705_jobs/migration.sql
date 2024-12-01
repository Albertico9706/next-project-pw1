/*
  Warnings:

  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL DEFAULT 'albe',
    MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Job` (
    `id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `jobSlug` VARCHAR(191) NOT NULL,
    `jobTitle` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `companyLogo` VARCHAR(191) NOT NULL,
    `jobGeo` VARCHAR(191) NOT NULL,
    `jobLevel` VARCHAR(191) NOT NULL,
    `jobExcerpt` VARCHAR(191) NOT NULL,
    `jobDescription` VARCHAR(191) NOT NULL,
    `pubDate` VARCHAR(191) NOT NULL,
    `annualSalaryMin` VARCHAR(191) NULL,
    `annualSalaryMax` VARCHAR(191) NULL,
    `salaryCurrency` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
