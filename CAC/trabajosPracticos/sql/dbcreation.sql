--Crear db
CREATE DATABASE codoacodo;

--Crear table
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

--Inserts
INSERT INTO tbl_name (a,b,c) VALUES(1,2,3),(4,5,6),(7,8,9);



--mariadb
CREATE TABLE `cac`.`cliente` () ENGINE = InnoDB;

--1
--CREATE TABLE `cac`.`cliente` ( `id` INT(11) NOT NULL , `nombre` INT NOT NULL , `apellido` INT NOT NULL , `edad` INT NOT NULL , `fecha` INT NOT NULL , `provincia` INT NOT NULL , PRIMARY KEY (`id`(11))) ENGINE = InnoDB CHARSET=latin1 COLLATE latin1_spanish_ci COMMENT = 'Tabla de clientes';
--3
--CREATE TABLE `cac`.`cliente` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(40) NOT NULL , `apellido` VARCHAR(40) NOT NULL , `edad` TINYINT(2) NOT NULL , `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `provincia` VARCHAR(30) NOT NULL , PRIMARY KEY (`id`(11))) ENGINE = InnoDB CHARSET=latin1 COLLATE latin1_spanish_ci COMMENT = 'Tabla de clientes';
--Final
CREATE TABLE `cac`.`cliente` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(40) NOT NULL , `apellido` VARCHAR(40) NOT NULL , `edad` TINYINT(2) NOT NULL , `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `provincia` VARCHAR(30) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB CHARSET=latin1 COLLATE latin1_spanish_ci COMMENT = 'Tabla de clientes';

--Inserts Default
INSERT INTO `cliente`(`id`, `nombre`, `apellido`, `edad`, `fecha`, `provincia`) VALUES 
('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]'),
('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]'),
('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]'),
('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]'),
('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]'),

--Inserts aplicados
INSERT INTO `cliente`(`nombre`, `apellido`, `edad`, `fecha`, `provincia`) VALUES 
('Valdemar','Andersen',20,'2000-02-20','Buenos Aires'),
('Giada','Fabre',30,'1990-03-01','Mendoza'),
('Ramon','Perez',40,'1980-04-16','Catamarca'),
('Carlos','Andersen',50,'1970-05-08','Santa Fe'),
('Sandra','Gomez',50,'1970-06-22','Buenos Aires')











