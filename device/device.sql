-- phpMyAdmin SQL Dump
-- version 3.5.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 16, 2013 at 05:32 PM
-- Server version: 5.5.29-log
-- PHP Version: 5.4.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `device`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

--
-- If the versioin of the MySQL is 5.6+, it's possible to use ENGINE=InnoDB,
-- otherwise, just ENGINE=MyISAM
--

CREATE TABLE IF NOT EXISTS `device` (
  `id` varchar(255) NOT NULL,
  `p` varchar(255) NOT NULL,
  `f` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `p` (`p`),
  FULLTEXT KEY `f` (`f`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
