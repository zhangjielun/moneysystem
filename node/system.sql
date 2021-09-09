/*
 Navicat Premium Data Transfer

 Source Server         : moneysystem
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : system

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 07/06/2021 15:43:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for balance
-- ----------------------------
DROP TABLE IF EXISTS `balance`;
CREATE TABLE `balance`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` decimal(6, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of balance
-- ----------------------------
INSERT INTO `balance` VALUES (1, 100.00);
INSERT INTO `balance` VALUES (2, 150.00);
INSERT INTO `balance` VALUES (3, 70.00);
INSERT INTO `balance` VALUES (4, 100.00);
INSERT INTO `balance` VALUES (5, 112.00);
INSERT INTO `balance` VALUES (6, 110.00);
INSERT INTO `balance` VALUES (7, 90.00);
INSERT INTO `balance` VALUES (8, 100.00);
INSERT INTO `balance` VALUES (9, 150.00);
INSERT INTO `balance` VALUES (10, 200.00);

-- ----------------------------
-- Table structure for datalist
-- ----------------------------
DROP TABLE IF EXISTS `datalist`;
CREATE TABLE `datalist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creatTime` datetime(0) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `explains` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `out_in` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `money` decimal(8, 2) NULL DEFAULT NULL,
  `remarks` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of datalist
-- ----------------------------
INSERT INTO `datalist` VALUES (1, '2021-03-10 17:56:04', '微信', '啊啊', '支出', 30.00, 'qq');
INSERT INTO `datalist` VALUES (2, '2021-03-10 17:56:13', '微信', 'wwww', '支出', 20.00, 'wwwwww');
INSERT INTO `datalist` VALUES (3, '2021-03-10 17:56:31', '现金', '收入', '收入', 20.00, 'rrr');
INSERT INTO `datalist` VALUES (4, '2021-03-10 19:55:40', '其他', '阿达', '支出', 3.00, '艾艾嗄吖');
INSERT INTO `datalist` VALUES (9, '2021-03-15 19:57:39', '支付宝', 'sss', '收入', 50.00, '无');
INSERT INTO `datalist` VALUES (6, '2021-03-10 19:55:58', '其他', '却未曾', '收入', 5.00, '的');
INSERT INTO `datalist` VALUES (7, '2021-03-10 19:56:08', '现金', '和环境', '收入', 6.00, '的的的');
INSERT INTO `datalist` VALUES (8, '2021-03-10 19:57:55', '支付宝', '属实杀', '支出', 7.00, '是');
INSERT INTO `datalist` VALUES (10, '2021-03-15 20:02:25', '微信', '埃是', '支出', 30.00, '啊啊');
INSERT INTO `datalist` VALUES (11, '2021-03-15 20:03:48', '支付宝', '呃饿', '收入', 30.00, '耳朵');
INSERT INTO `datalist` VALUES (12, '2021-03-16 13:26:20', '银行卡', 'aa', '收入', 12.00, 'aa');
INSERT INTO `datalist` VALUES (13, '2021-03-16 13:26:29', '银行卡', 'd', '支出', 2.00, 'aaf');
INSERT INTO `datalist` VALUES (14, '2021-03-16 13:26:37', '其他', 'dwqeq', '支出', 20.00, 'aaf');
INSERT INTO `datalist` VALUES (15, '2021-03-16 13:26:46', '支付宝', 'sf', '收入', 10.00, 'aaf');
INSERT INTO `datalist` VALUES (16, '2021-03-16 13:27:11', '银行卡', 'w', '收入', 50.00, 'w');
INSERT INTO `datalist` VALUES (17, '2021-04-24 15:43:22', '支付宝', 'test', '收入', 50.00, '无');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `ismanag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES (18, 'zjl', '123456', '13666148149', '1052177381@qq.com', 'http://localhost:3030/uploads/1622102021668116409-106.jpg', 'true');
INSERT INTO `userinfo` VALUES (2, 'xx', '1234', '435346', '123245', NULL, 'false');
INSERT INTO `userinfo` VALUES (3, '003', '1234', '123', '1234', NULL, 'true');
INSERT INTO `userinfo` VALUES (5, '005', '1234', '1234', '21345', NULL, 'false');
INSERT INTO `userinfo` VALUES (19, 'zjj', '123456', '12345678909', '12@qq.com', 'http://localhost:3030/uploads/309015.jpg', 'true');
INSERT INTO `userinfo` VALUES (23, 'test', '123456', '12344556676', '1231@qq.com', '', 'true');
INSERT INTO `userinfo` VALUES (17, 'zzz', '123456', '12312222222', '123@qq.com', 'http://localhost:3030/uploads/00eec5041460aba20f25493c435154cf', 'true');
INSERT INTO `userinfo` VALUES (21, 'qwe', '123456', '12345678900', '12@qq.com', 'E:\\moneysystem\\node\\uploads\\309015.jpg', 'false');

SET FOREIGN_KEY_CHECKS = 1;
