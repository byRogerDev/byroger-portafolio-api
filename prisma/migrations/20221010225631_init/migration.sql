-- CreateTable
CREATE TABLE `academies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `year` INTEGER NULL,
    `img` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `place` VARCHAR(255) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `certificates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `place` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `time` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `challenges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hobbyprojects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `start` DATE NULL,
    `end` DATE NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personalprojects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `img` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `start` DATE NULL,
    `end` DATE NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesionalprojects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `year` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `start` DATE NULL,
    `end` DATE NULL,
    `updateAt` DATETIME(0) NULL,
    `createdAt` DATETIME(0) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesionalprojectstechnologies` (
    `idTechnology` INTEGER UNSIGNED NOT NULL,
    `idProfesional` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`idTechnology`, `idProfesional`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `technologies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `primaryColor` VARCHAR(255) NULL,
    `secundaryColor` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profesionalprojectstechnologies` ADD CONSTRAINT `profesionalprojectstechnologies_idProfesional_fkey` FOREIGN KEY (`idProfesional`) REFERENCES `profesionalprojects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profesionalprojectstechnologies` ADD CONSTRAINT `profesionalprojectstechnologies_idTechnology_fkey` FOREIGN KEY (`idTechnology`) REFERENCES `technologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
