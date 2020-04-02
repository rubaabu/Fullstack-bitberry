-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2020 at 03:31 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitberry`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `news_title` varchar(100) NOT NULL,
  `news_info` varchar(350) NOT NULL,
  `news_status` enum('Open','Closed') NOT NULL,
  `news_created_by` int(11) NOT NULL,
  `news_created_at` datetime NOT NULL,
  `news_updated_by` int(11) NOT NULL,
  `news_updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_title`, `news_info`, `news_status`, `news_created_by`, `news_created_at`, `news_updated_by`, `news_updated_at`) VALUES
(7, 'Read some books', 'All those books you\'ve been meaning to read can finally get the attention they deserve. Reach out to your local book store to see how they\'re handling the coronavirus outbreak. If the show is delivering or open to quick pop-ins from a limited number of customers at a time, stock up on a pile of books and get to reading.', 'Closed', 3, '2020-03-13 15:00:00', 3, '2020-03-31 20:20:24'),
(8, 'Take a virtual class', 'While gathering in a classroom might not be advisable right now, thanks to the power of the internet, classes of all kinds are still available. Learning something new and thinking critically are great ways to stave off cabin fever. Since many small language schools in the U.S. and abroad have been forced to shut down in-person sessions, look into h', 'Open', 3, '2020-03-14 09:00:00', 3, '2020-03-31 20:22:16'),
(9, 'Learn a new language', 'Hello, Hola, Salut, Guten Tag -- Whether your first language is English, Spanish, French or German there is never a bad time to pick up a new language!\r\n\r\nThere are plenty of sites and apps such as Duolingo, Memrise, OpenCulture and Babble that offer online resources and tools to learn new languages for free.', 'Open', 4, '2020-02-29 16:00:00', 4, '2020-03-31 20:32:56'),
(10, 'NASA offering fun activities for families', '(CNN) – NASA is bringing the universe straight to your living room.\r\n\r\nThe space agency is offering educational resources to families cooped up at home because of the coronavirus pandemic.\r\n\r\nNASA’s website includes dozens of tutorials on different STEM (science, technology, engineering and math) activities for kids and adults alike.\r\n\r\nMany of the', 'Closed', 5, '2020-02-25 00:00:00', 5, '2020-03-31 20:37:06'),
(11, 'Test', 'testtesttesttesttesttesttesttesttesttesttest', 'Open', 5, '2020-03-23 11:00:00', 3, '2020-04-02 13:23:54');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(70) NOT NULL,
  `user_address` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_address`) VALUES
(3, 'OLIVIA HARRISON', 'https://www.refinery29.com/en-us/author/olivia-harrison'),
(4, 'Nicole Jelinek', 'https://www.wpxi.com/entertainment/see-and-be-seen/11-things-do-home/7'),
(5, 'NASA', 'https://www.nasa.gov/specials/nasaathome/index.html');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`),
  ADD KEY `news_created_by` (`news_created_by`),
  ADD KEY `news_updated_by` (`news_updated_by`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`news_created_by`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`news_updated_by`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
