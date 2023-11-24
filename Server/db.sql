-- Creating an Schema 
CREATE SCHEMA `wlb` ;
-- Creating an user info Table in the schema wlb
CREATE TABLE `wlb`.`userInfo` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`uid`));
--  Creating an tracker Table in the wlb
CREATE TABLE `wlb`.`tracker` (
  `tid` INT NOT NULL AUTO_INCREMENT,
  `uid` INT NULL,
  `whr` INT NULL,
  `bhr` INT NULL,
  PRIMARY KEY (`tid`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `wlb`.`userInfo` (`uid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `wlb`.`tracker` 
CHANGE COLUMN `whr` `whr` INT NULL DEFAULT 0 ,
CHANGE COLUMN `bhr` `bhr` INT NULL DEFAULT 0 ;
