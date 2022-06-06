-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2022 at 01:49 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cac`
--

-- --------------------------------------------------------

--
-- Table structure for table `nekro`
--
-- Creation: Jun 05, 2022 at 11:44 PM
-- Last update: Jun 05, 2022 at 11:46 PM
--

DROP TABLE IF EXISTS `nekro`;
CREATE TABLE IF NOT EXISTS `nekro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(40) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `edad` tinyint(2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `provincia` varchar(30) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Truncate table before insert `nekro`
--

TRUNCATE TABLE `nekro`;
--
-- Dumping data for table `nekro`
--

INSERT DELAYED IGNORE INTO `nekro` (`id`, `nombre`, `apellido`, `edad`, `fecha`, `provincia`) VALUES
(1, 'Valdemar', 'Andersen', 20, '2000-02-20 06:00:00', 'Buenos Aires'),
(2, 'Giada', 'Fabre', 30, '1990-03-01 06:00:00', 'Mendoza'),
(3, 'Ramon', 'Perez', 40, '1980-04-16 06:00:00', 'Catamarca'),
(4, 'Carlos', 'Andersen', 50, '1970-05-08 06:00:00', 'Santa Fe'),
(5, 'Sandra', 'Gomez', 60, '1970-06-22 06:00:00', 'Buenos Aires');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
