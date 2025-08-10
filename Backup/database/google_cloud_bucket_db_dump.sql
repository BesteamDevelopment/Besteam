-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 51.158.74.90    Database: besteamdb
-- ------------------------------------------------------
-- Server version	8.0.21

USE besteamdb;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (40);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investors`
--

DROP TABLE IF EXISTS `investors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investors` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `wallet_code` varchar(255) DEFAULT NULL,
  `investment_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investors`
--

LOCK TABLES `investors` WRITE;
/*!40000 ALTER TABLE `investors` DISABLE KEYS */;
/*!40000 ALTER TABLE `investors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  `sender` bigint DEFAULT NULL,
  `receiver` bigint DEFAULT NULL,
  `readed` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_sender` (`sender`),
  KEY `idx_receiver` (`receiver`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'ciao','2024-01-08 11:31:56',14,10,0);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wallet_code` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `discord` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `play_from_where` varchar(255) DEFAULT NULL,
  `platform` varchar(255) DEFAULT NULL,
  `console_account` varchar(255) DEFAULT NULL,
  `first_role` varchar(255) DEFAULT NULL,
  `second_role` varchar(255) DEFAULT NULL,
  `social` varchar(255) DEFAULT NULL,
  `is_online` tinyint(1) DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `has_permission` tinyint(1) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT NULL,
  `newsletter_check` tinyint(1) DEFAULT NULL,
  `avatar_img` varchar(50) DEFAULT NULL,
  `user_role` varchar(50) DEFAULT NULL,
  `team_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_team_id` (`team_id`),
  CONSTRAINT `fk_team_id` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (9,'bbbb','bbbb','@bbbb','bb@bbbb.org','Italy','Italy','PS5','bbbbb','COC','CC',NULL,0,'2023-11-08',1,0,1,'img1',NULL,NULL),(10,'0x78A07433B44413da5259C978ffc318e5F20B1D06','prova','prova','prova@gmail.com','Algeria','Andorra','XB','fdsfds','LB','CB',NULL,0,'2023-11-21',1,0,1,'donna',NULL,NULL),(11,'jfjfjfjfjfjfj','CallALetto','fjfjfjjf','test@gmail.com','Albania','Albania','XB','fdfdfdffdfdf','CB','CB',NULL,0,'2023-11-21',1,0,1,'donna',NULL,NULL),(12,'fdisjfiajfdisajfsaf','enricofunziona','fdjsifjsdifjdsifsj','rococ@gmail.com','Algeria','Albania','PS','fjdisfjdifjsif','LB','CB',NULL,0,'2023-11-21',1,0,1,'donna',NULL,NULL),(14,'ccccccc','asdsad','fgdfgd','hjkhjk@gmail.com','Algeria','Algeria','XB','fjdisaof','CB','GK',NULL,0,'2023-11-22',1,0,1,'uomo','1',4),(15,'hhhhhhhhh','aposkdkpokasd','aklasmdlkamsd','ksoidfjsdf@gmail.com','Algeria','Algeria','XB','fjdisaof','CB','GK',NULL,0,'2024-03-11',1,0,1,'uomo','1',6),(16,'lksdfmf','lsdkfsd','lsdkfsd','lsdkfsd@gmail.com','Algeria','Algeria','XB','fjdisaof','CB','GK',NULL,0,'2024-03-11',1,0,1,'uomo','0',NULL);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `clubs_name` varchar(255) DEFAULT NULL,
  `twitter_page` varchar(255) DEFAULT NULL,
  `live_page` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `abbreviation` varchar(255) DEFAULT NULL,
  `club_color_one` varchar(255) DEFAULT NULL,
  `club_color_two` varchar(255) DEFAULT NULL,
  `training_center_name` varchar(255) DEFAULT NULL,
  `stadium_name` varchar(255) DEFAULT NULL,
  `metaverse_zone` varchar(255) DEFAULT NULL,
  `creation_date` date DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT NULL,
  `has_permission` tinyint(1) DEFAULT NULL,
  `wins` int DEFAULT NULL,
  `draws` int DEFAULT NULL,
  `losses` int DEFAULT NULL,
  `historical_ranking` double DEFAULT NULL,
  `annual_ranking` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Ciccio team',NULL,'OstiaTW','Live','Ciccio.png','CCT','Color1','Color2','Viola Park','Ciccio stadium','A','2023-11-22',0,1,NULL,NULL,NULL,NULL,NULL),(2,'team1','team1','team1','team1','team1.png','team1','team1','team1','team1 Park','team1 stadium','A','2023-12-14',0,1,NULL,NULL,NULL,NULL,NULL),(3,'rocco','prova','prova','prova','prova','prova','prova','prova','prova','prova','prova','2023-12-14',0,1,NULL,NULL,NULL,NULL,NULL),(4,'enrico','enrico','enrico','enrico2','logobello','enr','red','green','forza bari','san nicola','boh','2023-12-14',0,1,NULL,NULL,NULL,NULL,NULL),(5,'Squadra1','Squadra1','Squadra1','Squadra1','team1.png','team1','team1','team1','Squadra1 Park','Squadra1 stadium','A','2024-03-11',0,1,0,0,0,0,0),(6,'Squadra2','Squadra2','Squadra2','Squadra2','Squadra2.png','Squadra2','Squadra2','Squadra2','Squadra2 Park','Squadra2 stadium','A','2024-03-13',0,1,0,0,0,0,0);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin`
--

DROP TABLE IF EXISTS `user_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin`
--

LOCK TABLES `user_admin` WRITE;
/*!40000 ALTER TABLE `user_admin` DISABLE KEYS */;
INSERT INTO `user_admin` VALUES (1,'jacopo','ciao','fake@fake.com');
/*!40000 ALTER TABLE `user_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'besteamdb'
--

--
-- Dumping routines for database 'besteamdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-28 10:09:21
