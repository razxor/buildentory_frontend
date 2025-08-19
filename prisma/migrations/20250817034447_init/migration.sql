/*
  Warnings:

  - The values [LAND] on the enum `Property_propertyType` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `state` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postalCode` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_propertyId_fkey`;

-- DropIndex
DROP INDEX `Image_propertyId_fkey` ON `image`;

-- AlterTable
ALTER TABLE `property` MODIFY `state` VARCHAR(191) NOT NULL,
    MODIFY `postalCode` VARCHAR(191) NOT NULL,
    MODIFY `propertyType` ENUM('HOUSE', 'APARTMENT', 'CONDO', 'TOWNHOUSE') NOT NULL;
