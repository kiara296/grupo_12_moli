-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categoryproduct`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categoryproduct` ;

CREATE TABLE IF NOT EXISTS `mydb`.`categoryproduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`categoryuser`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categoryuser` ;

CREATE TABLE IF NOT EXISTS `mydb`.`categoryuser` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`product` ;

CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `discount` INT NULL DEFAULT NULL,
  `description` VARCHAR(500) NOT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  `alt` VARCHAR(45) NULL DEFAULT NULL,
  `ingredients` VARCHAR(500) NULL DEFAULT NULL,
  `cooking` VARCHAR(500) NULL DEFAULT NULL,
  `nutritional_info` VARCHAR(500) NULL DEFAULT NULL,
  `categoryProduct_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_producto_categoryProduct1_idx` (`categoryProduct_id` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoryProduct1`
    FOREIGN KEY (`categoryProduct_id`)
    REFERENCES `mydb`.`categoryproduct` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `category_id` INT NOT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_user_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`categoryuser` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`transaction` ;

CREATE TABLE IF NOT EXISTS `mydb`.`transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_transaction_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_transaction_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`product_transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`product_transaction` ;

CREATE TABLE IF NOT EXISTS `mydb`.`product_transaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `transaction_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_product_transaction_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_product_transaction_transaction1_idx` (`transaction_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_transaction_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `mydb`.`product` (`id`),
  CONSTRAINT `fk_product_transaction_transaction1`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `mydb`.`transaction` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
