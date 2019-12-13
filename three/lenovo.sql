/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : lenovo

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2019-12-13 11:22:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dt_address
-- ----------------------------
DROP TABLE IF EXISTS `dt_address`;
CREATE TABLE `dt_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `receiveName` varchar(16) NOT NULL,
  `receivePhone` varchar(11) NOT NULL,
  `receiveRegion` varchar(50) NOT NULL,
  `receiveDetail` varchar(50) NOT NULL,
  `isDefault` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_address_name_user_name` (`name`),
  CONSTRAINT `fk_address_name_user_name` FOREIGN KEY (`name`) REFERENCES `dt_user` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_address
-- ----------------------------
INSERT INTO `dt_address` VALUES ('9', 'user1', '张顺', '13966666669', '山东省-青岛市-城阳区-城阳街道', '女神看上少女', '1');
INSERT INTO `dt_address` VALUES ('13', 'user1', 'ncjjz', '13866666666', '山东青岛城阳', '擦是参数V型从V型从', '0');

-- ----------------------------
-- Table structure for dt_admin
-- ----------------------------
DROP TABLE IF EXISTS `dt_admin`;
CREATE TABLE `dt_admin` (
  `name` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_admin
-- ----------------------------
INSERT INTO `dt_admin` VALUES ('admin1', '654321');

-- ----------------------------
-- Table structure for dt_cart
-- ----------------------------
DROP TABLE IF EXISTS `dt_cart`;
CREATE TABLE `dt_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `pid` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `addtime` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_name_user_name` (`name`),
  KEY `fk_cart_pid_product_id` (`pid`),
  CONSTRAINT `fk_cart_name_user_name` FOREIGN KEY (`name`) REFERENCES `dt_user` (`name`),
  CONSTRAINT `fk_cart_pid_product_id` FOREIGN KEY (`pid`) REFERENCES `dt_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_cart
-- ----------------------------

-- ----------------------------
-- Table structure for dt_category
-- ----------------------------
DROP TABLE IF EXISTS `dt_category`;
CREATE TABLE `dt_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `fid` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_category
-- ----------------------------
INSERT INTO `dt_category` VALUES ('1', 'Lenovo 电脑', '0', '/images/category/1.jpg');
INSERT INTO `dt_category` VALUES ('2', 'ThinkPad电脑', '0', '/images/category/2.jpg');
INSERT INTO `dt_category` VALUES ('3', '手机/通信', '0', '/images/category/3.jpg');
INSERT INTO `dt_category` VALUES ('4', '智能产品', '0', '/images/category/4.jpg');
INSERT INTO `dt_category` VALUES ('5', '平板电脑', '0', '/images/category/5.jpg');
INSERT INTO `dt_category` VALUES ('6', '配件/办公', '0', '/images/category/6.jpg');
INSERT INTO `dt_category` VALUES ('7', '增值服务', '0', '/images/category/7.jpg');
INSERT INTO `dt_category` VALUES ('8', '游戏本', '1', null);
INSERT INTO `dt_category` VALUES ('9', '轻薄本', '1', null);
INSERT INTO `dt_category` VALUES ('10', '便携本', '1', null);
INSERT INTO `dt_category` VALUES ('11', '常规本', '1', null);
INSERT INTO `dt_category` VALUES ('12', '二合一本', '1', null);
INSERT INTO `dt_category` VALUES ('13', '台式机', '1', null);
INSERT INTO `dt_category` VALUES ('14', '子系列', '1', null);
INSERT INTO `dt_category` VALUES ('15', '场景', '1', null);
INSERT INTO `dt_category` VALUES ('16', '特色服务', '1', null);
INSERT INTO `dt_category` VALUES ('17', 'ThinkPad', '2', null);
INSERT INTO `dt_category` VALUES ('18', 'ThinkCentre', '2', null);
INSERT INTO `dt_category` VALUES ('19', 'thinkplus', '2', null);
INSERT INTO `dt_category` VALUES ('20', 'Think配件', '2', null);
INSERT INTO `dt_category` VALUES ('21', '特色服务', '2', null);
INSERT INTO `dt_category` VALUES ('22', 'Lenovo', '3', null);
INSERT INTO `dt_category` VALUES ('23', 'Motorola', '3', null);
INSERT INTO `dt_category` VALUES ('24', '专属配件', '3', null);
INSERT INTO `dt_category` VALUES ('25', '场景', '3', null);
INSERT INTO `dt_category` VALUES ('26', '170/171', '3', null);
INSERT INTO `dt_category` VALUES ('27', '家居', '4', null);
INSERT INTO `dt_category` VALUES ('28', '健康', '4', null);
INSERT INTO `dt_category` VALUES ('29', '出行', '4', null);
INSERT INTO `dt_category` VALUES ('30', '安防', '4', null);
INSERT INTO `dt_category` VALUES ('31', '智玩', '4', null);
INSERT INTO `dt_category` VALUES ('32', '智能平板', '5', null);
INSERT INTO `dt_category` VALUES ('33', '小新平板', '5', null);
INSERT INTO `dt_category` VALUES ('34', '二合一笔记本', '5', null);
INSERT INTO `dt_category` VALUES ('35', 'YOGA平板', '5', null);
INSERT INTO `dt_category` VALUES ('36', '常规平板', '5', null);
INSERT INTO `dt_category` VALUES ('37', '场景', '5', null);
INSERT INTO `dt_category` VALUES ('38', '专属配件', '5', null);
INSERT INTO `dt_category` VALUES ('39', '存储设备', '6', null);
INSERT INTO `dt_category` VALUES ('40', 'k歌直播', '6', null);
INSERT INTO `dt_category` VALUES ('41', '显示生态', '6', null);
INSERT INTO `dt_category` VALUES ('42', '娱乐生活', '6', null);
INSERT INTO `dt_category` VALUES ('43', '游戏设备', '6', null);
INSERT INTO `dt_category` VALUES ('44', '电脑配件', '6', null);
INSERT INTO `dt_category` VALUES ('45', '手机配件', '6', null);
INSERT INTO `dt_category` VALUES ('46', '平板配件', '6', null);
INSERT INTO `dt_category` VALUES ('47', '打印机', '6', null);
INSERT INTO `dt_category` VALUES ('48', 'Care+', '7', null);
INSERT INTO `dt_category` VALUES ('49', '系统服务', '7', null);
INSERT INTO `dt_category` VALUES ('50', '清洁保养', '7', null);
INSERT INTO `dt_category` VALUES ('51', '数据恢复', '7', null);
INSERT INTO `dt_category` VALUES ('52', '诊断维修', '7', null);
INSERT INTO `dt_category` VALUES ('53', '硬件升级', '7', null);
INSERT INTO `dt_category` VALUES ('54', '拯救者Y7000P', '8', '/images/category/8.jpg');
INSERT INTO `dt_category` VALUES ('55', '拯救者Y7000', '8', '/images/category/9.jpg');
INSERT INTO `dt_category` VALUES ('56', '拯救者Y9000K', '8', '/images/category/10.jpg');
INSERT INTO `dt_category` VALUES ('57', '拯救者选件', '8', '/images/category/11.jpg');
INSERT INTO `dt_category` VALUES ('58', 'Y9000X', '9', '/images/category/12.png');
INSERT INTO `dt_category` VALUES ('59', '小新14', '9', '/images/category/13.jpg');
INSERT INTO `dt_category` VALUES ('60', '小新青春版', '9', '/images/category/14.jpg');
INSERT INTO `dt_category` VALUES ('61', '小新 15', '9', '/images/category/15.jpg');
INSERT INTO `dt_category` VALUES ('62', 'Ari14 2019款', '9', '/images/category/16.jpg');
INSERT INTO `dt_category` VALUES ('63', '小新潮7000-14', '9', '/images/category/17.jpg');
INSERT INTO `dt_category` VALUES ('64', '小新Air', '10', '/images/category/18.jpg');
INSERT INTO `dt_category` VALUES ('65', 'YOGA C940', '10', '/images/category/19.jpg');
INSERT INTO `dt_category` VALUES ('66', 'YOGA C740', '10', '/images/category/20.jpg');
INSERT INTO `dt_category` VALUES ('67', '小新潮7000-13', '10', '/images/category/21.jpg');
INSERT INTO `dt_category` VALUES ('68', 'YOGA S940', '10', '/images/category/22.jpg');
INSERT INTO `dt_category` VALUES ('69', 'YOGA Book2', '10', '/images/category/23.jpg');
INSERT INTO `dt_category` VALUES ('70', 'ideapad340C', '11', '/images/category/24.jpg');
INSERT INTO `dt_category` VALUES ('71', 'ideapad320C', '11', '/images/category/25.jpg');
INSERT INTO `dt_category` VALUES ('72', 'ideapad330C', '11', '/images/category/26.jpg');
INSERT INTO `dt_category` VALUES ('73', 'D330系列', '12', '/images/category/27.jpg');
INSERT INTO `dt_category` VALUES ('74', 'MIIX 520系列', '12', '/images/category/28.jpg');
INSERT INTO `dt_category` VALUES ('75', 'MIIX 320系列', '12', '/images/category/29.jpg');
INSERT INTO `dt_category` VALUES ('76', 'MIIX 4系列', '12', '/images/category/30.jpg');
INSERT INTO `dt_category` VALUES ('77', 'GeekPro', '13', '/images/category/31.jpg');
INSERT INTO `dt_category` VALUES ('78', '分体台式机', '13', '/images/category/32.jpg');
INSERT INTO `dt_category` VALUES ('79', '一体台式机', '13', '/images/category/33.jpg');
INSERT INTO `dt_category` VALUES ('80', '游戏主机', '13', '/images/category/34.jpg');
INSERT INTO `dt_category` VALUES ('81', '显示屏', '13', '/images/category/35.jpg');
INSERT INTO `dt_category` VALUES ('82', '小新', '14', '/images/category/36.jpg');
INSERT INTO `dt_category` VALUES ('83', '拯救者', '14', '/images/category/37.jpg');
INSERT INTO `dt_category` VALUES ('84', 'YOGA', '14', '/images/category/38.jpg');
INSERT INTO `dt_category` VALUES ('85', 'MIIX', '14', '/images/category/39.jpg');
INSERT INTO `dt_category` VALUES ('86', '高清游戏', '15', '/images/category/40.jpg');
INSERT INTO `dt_category` VALUES ('87', '家庭娱乐', '15', '/images/category/41.jpg');
INSERT INTO `dt_category` VALUES ('88', '潮范校园', '15', '/images/category/42.jpg');
INSERT INTO `dt_category` VALUES ('89', '便携出行', '15', '/images/category/43.jpg');
INSERT INTO `dt_category` VALUES ('90', '私人订制', '16', '/images/category/44.jpg');
INSERT INTO `dt_category` VALUES ('91', '极速到家', '16', '/images/category/45.jpg');
INSERT INTO `dt_category` VALUES ('92', 'S系列', '17', '/images/category/46.jpg');
INSERT INTO `dt_category` VALUES ('93', 'E系列', '17', '/images/category/47.jpg');
INSERT INTO `dt_category` VALUES ('94', 'X系列', '17', '/images/category/48.jpg');
INSERT INTO `dt_category` VALUES ('95', 'T系列', '17', '/images/category/49.jpg');
INSERT INTO `dt_category` VALUES ('96', 'X1系列', '17', '/images/category/50.jpg');
INSERT INTO `dt_category` VALUES ('97', 'P系列', '17', '/images/category/51.jpg');
INSERT INTO `dt_category` VALUES ('98', 'R系列', '17', '/images/category/52.jpg');
INSERT INTO `dt_category` VALUES ('99', '分体台式机', '18', '/images/category/53.jpg');
INSERT INTO `dt_category` VALUES ('100', '高性能一体机', '18', '/images/category/54.jpg');
INSERT INTO `dt_category` VALUES ('101', '口红电源', '19', '/images/category/55.jpg');
INSERT INTO `dt_category` VALUES ('102', '随身充', '19', '/images/category/56.jpg');
INSERT INTO `dt_category` VALUES ('103', '拉杆箱', '19', '/images/category/57.jpg');
INSERT INTO `dt_category` VALUES ('104', '运动耳机', '19', '/images/category/58.jpg');
INSERT INTO `dt_category` VALUES ('105', '指纹U盘', '19', '/images/category/59.jpg');
INSERT INTO `dt_category` VALUES ('106', '便携蓝牙鼠标', '19', '/images/category/60.jpg');
INSERT INTO `dt_category` VALUES ('107', '电脑包', '20', '/images/category/61.jpg');
INSERT INTO `dt_category` VALUES ('108', '键鼠', '20', '/images/category/62.jpg');
INSERT INTO `dt_category` VALUES ('109', '电源适配器', '20', '/images/category/63.jpg');
INSERT INTO `dt_category` VALUES ('110', '转接&扩展设备', '20', '/images/category/64.jpg');
INSERT INTO `dt_category` VALUES ('111', '防窥片', '20', '/images/category/65.jpg');
INSERT INTO `dt_category` VALUES ('112', '显示器', '20', '/images/category/66.jpg');
INSERT INTO `dt_category` VALUES ('113', '专属定制', '21', '/images/category/67.jpg');
INSERT INTO `dt_category` VALUES ('114', '极速到家（最快3小时）', '21', '/images/category/68.jpg');
INSERT INTO `dt_category` VALUES ('115', 'Z6', '22', '/images/category/69.jpg');
INSERT INTO `dt_category` VALUES ('116', 'Z6 青春版', '22', '/images/category/70.jpg');
INSERT INTO `dt_category` VALUES ('117', 'Z6 Pro', '22', '/images/category/71.jpg');
INSERT INTO `dt_category` VALUES ('118', 'Z5 Pro GT 855版', '22', '/images/category/72.jpg');
INSERT INTO `dt_category` VALUES ('119', 'Z5 Pro', '22', '/images/category/73.jpg');
INSERT INTO `dt_category` VALUES ('120', 'Z5s', '22', '/images/category/74.jpg');
INSERT INTO `dt_category` VALUES ('121', 'Z5', '22', '/images/category/75.jpg');
INSERT INTO `dt_category` VALUES ('122', 'S5 Pro GT', '22', '/images/category/76.jpg');
INSERT INTO `dt_category` VALUES ('123', 'K5 Pro', '22', '/images/category/77.jpg');
INSERT INTO `dt_category` VALUES ('124', 'motorola p50', '23', '/images/category/78.jpg');
INSERT INTO `dt_category` VALUES ('125', 'motorola z3', '23', '/images/category/79.jpg');
INSERT INTO `dt_category` VALUES ('126', 'motorola p30', '23', '/images/category/80.jpg');
INSERT INTO `dt_category` VALUES ('127', 'motorola e5 plus', '23', '/images/category/81.jpg');
INSERT INTO `dt_category` VALUES ('128', 'motorola p30 note', '23', '/images/category/82.jpg');
INSERT INTO `dt_category` VALUES ('129', 'motorola g7 plus', '23', '/images/category/83.jpg');
INSERT INTO `dt_category` VALUES ('130', '联想Z5手机保护壳', '24', '/images/category/84.jpg');
INSERT INTO `dt_category` VALUES ('131', 'Watch X plus智能手表', '24', '/images/category/85.jpg');
INSERT INTO `dt_category` VALUES ('132', '游戏手机', '25', '/images/category/86.jpg');
INSERT INTO `dt_category` VALUES ('133', '拍照手机', '25', '/images/category/87.jpg');
INSERT INTO `dt_category` VALUES ('134', '女性手机', '25', '/images/category/88.jpg');
INSERT INTO `dt_category` VALUES ('135', '长续航手机', '25', '/images/category/89.jpg');
INSERT INTO `dt_category` VALUES ('136', '懂陪伴', '26', '/images/category/90.jpg');
INSERT INTO `dt_category` VALUES ('137', '糖豆儿', '26', '/images/category/91.jpg');
INSERT INTO `dt_category` VALUES ('138', '大白话', '26', '/images/category/92.jpg');
INSERT INTO `dt_category` VALUES ('139', '智能音箱', '27', '/images/category/93.jpg');
INSERT INTO `dt_category` VALUES ('140', '节水宝S1', '27', '/images/category/94.jpg');
INSERT INTO `dt_category` VALUES ('141', '智能插座', '27', '/images/category/95.jpg');
INSERT INTO `dt_category` VALUES ('142', 'AR设备', '27', '/images/category/96.jpg');
INSERT INTO `dt_category` VALUES ('143', '扫地机器人', '27', '/images/category/97.jpg');
INSERT INTO `dt_category` VALUES ('144', '空气净化器', '28', '/images/category/98.jpg');
INSERT INTO `dt_category` VALUES ('145', '体脂秤', '28', '/images/category/99.jpg');
INSERT INTO `dt_category` VALUES ('146', '蛋蛋车', '29', '/images/category/100.jpg');
INSERT INTO `dt_category` VALUES ('147', '行车记录仪', '29', '/images/category/101.jpg');
INSERT INTO `dt_category` VALUES ('148', '车载空气净化器', '29', '/images/category/102.jpg');
INSERT INTO `dt_category` VALUES ('149', '车载充电器', '29', '/images/category/103.jpg');
INSERT INTO `dt_category` VALUES ('150', '对讲机', '29', '/images/category/104.jpg');
INSERT INTO `dt_category` VALUES ('151', '车载充气泵', '29', '/images/category/105.jpg');
INSERT INTO `dt_category` VALUES ('152', '智能指纹锁', '30', '/images/category/106.jpg');
INSERT INTO `dt_category` VALUES ('153', '看家宝Snowman', '30', '/images/category/107.jpg');
INSERT INTO `dt_category` VALUES ('154', '倍爱宝A1', '30', '/images/category/108.jpg');
INSERT INTO `dt_category` VALUES ('155', '看家宝R1', '30', '/images/category/109.jpg');
INSERT INTO `dt_category` VALUES ('156', '联想乐迪智能机器人', '31', '/images/category/110.jpg');
INSERT INTO `dt_category` VALUES ('157', '优必选机器人', '31', '/images/category/111.jpg');
INSERT INTO `dt_category` VALUES ('158', '联想小乐智能机器人', '31', '/images/category/112.jpg');
INSERT INTO `dt_category` VALUES ('159', 'M10系列', '32', '/images/category/113.jpg');
INSERT INTO `dt_category` VALUES ('160', '小新平板', '33', '/images/category/114.jpg');
INSERT INTO `dt_category` VALUES ('161', 'D330', '34', '/images/category/115.jpg');
INSERT INTO `dt_category` VALUES ('162', 'MIIX 520', '34', '/images/category/116.jpg');
INSERT INTO `dt_category` VALUES ('163', 'MIIX 320', '34', '/images/category/117.jpg');
INSERT INTO `dt_category` VALUES ('164', 'YOGA平板3', '35', '/images/category/118.jpg');
INSERT INTO `dt_category` VALUES ('165', 'YOGA TAB5 系列', '35', '/images/category/119.jpg');
INSERT INTO `dt_category` VALUES ('166', 'TAB4', '36', '/images/category/120.jpg');
INSERT INTO `dt_category` VALUES ('167', 'TAB4 Plus', '36', '/images/category/121.jpg');
INSERT INTO `dt_category` VALUES ('168', 'E8系列', '36', '/images/category/122.jpg');
INSERT INTO `dt_category` VALUES ('169', 'E10系列', '36', '/images/category/123.jpg');
INSERT INTO `dt_category` VALUES ('170', '安卓娱乐', '37', '/images/category/124.jpg');
INSERT INTO `dt_category` VALUES ('171', '二合一平板', '37', '/images/category/125.jpg');
INSERT INTO `dt_category` VALUES ('172', '通话网络平板', '37', '/images/category/126.jpg');
INSERT INTO `dt_category` VALUES ('173', '游戏必备', '37', '/images/category/127.jpg');
INSERT INTO `dt_category` VALUES ('174', 'MIIX触控笔', '38', '/images/category/128.jpg');
INSERT INTO `dt_category` VALUES ('175', 'U盘', '39', '/images/category/129.jpg');
INSERT INTO `dt_category` VALUES ('176', '移动硬盘', '39', '/images/category/130.jpg');
INSERT INTO `dt_category` VALUES ('177', '直播/娱乐宝', '40', '/images/category/131.jpg');
INSERT INTO `dt_category` VALUES ('178', '麦克风', '40', '/images/category/132.jpg');
INSERT INTO `dt_category` VALUES ('179', '显示器', '41', '/images/category/133.jpg');
INSERT INTO `dt_category` VALUES ('180', '耳机耳麦', '42', '/images/category/134.jpg');
INSERT INTO `dt_category` VALUES ('181', '音箱', '42', '/images/category/135.jpg');
INSERT INTO `dt_category` VALUES ('182', '箱包', '42', '/images/category/136.jpg');
INSERT INTO `dt_category` VALUES ('183', '投影仪', '42', '/images/category/137.jpg');
INSERT INTO `dt_category` VALUES ('184', '录音笔', '42', '/images/category/138.jpg');
INSERT INTO `dt_category` VALUES ('185', '插线板', '42', '/images/category/139.jpg');
INSERT INTO `dt_category` VALUES ('186', '冰箱', '42', '/images/category/140.jpg');
INSERT INTO `dt_category` VALUES ('187', '游戏鼠标', '43', '/images/category/141.jpg');
INSERT INTO `dt_category` VALUES ('188', '游戏键盘', '43', '/images/category/142.jpg');
INSERT INTO `dt_category` VALUES ('189', '电竞耳机', '43', '/images/category/143.jpg');
INSERT INTO `dt_category` VALUES ('190', '电竞背包', '43', '/images/category/144.jpg');
INSERT INTO `dt_category` VALUES ('191', '电竞显示器', '43', '/images/category/145.jpg');
INSERT INTO `dt_category` VALUES ('192', '游戏鼠标垫', '43', '/images/category/146.jpg');
INSERT INTO `dt_category` VALUES ('193', '鼠标', '44', '/images/category/147.jpg');
INSERT INTO `dt_category` VALUES ('194', '键盘', '44', '/images/category/148.jpg');
INSERT INTO `dt_category` VALUES ('195', '电脑包', '44', '/images/category/149.jpg');
INSERT INTO `dt_category` VALUES ('196', '保护壳', '44', '/images/category/150.jpg');
INSERT INTO `dt_category` VALUES ('197', '外置光驱', '44', '/images/category/151.jpg');
INSERT INTO `dt_category` VALUES ('198', '电源适配器', '44', '/images/category/152.jpg');
INSERT INTO `dt_category` VALUES ('199', '转接&扩展设备', '44', '/images/category/153.jpg');
INSERT INTO `dt_category` VALUES ('200', '防窥片', '44', '/images/category/154.jpg');
INSERT INTO `dt_category` VALUES ('201', '联想S5 手机保护壳', '45', '/images/category/155.jpg');
INSERT INTO `dt_category` VALUES ('202', '联想 Z5 手机保护壳', '45', '/images/category/156.jpg');
INSERT INTO `dt_category` VALUES ('203', 'MIIX触控笔', '46', '/images/category/157.jpg');
INSERT INTO `dt_category` VALUES ('204', '单功能打印机', '47', '/images/category/158.jpg');
INSERT INTO `dt_category` VALUES ('205', '多功能一体机', '47', '/images/category/159.jpg');
INSERT INTO `dt_category` VALUES ('206', '耗材', '47', '/images/category/160.jpg');
INSERT INTO `dt_category` VALUES ('207', '3D打印机', '47', '/images/category/161.jpg');
INSERT INTO `dt_category` VALUES ('208', '延长保修', '48', '/images/category/162.jpg');
INSERT INTO `dt_category` VALUES ('209', '上门服务', '48', '/images/category/163.jpg');
INSERT INTO `dt_category` VALUES ('210', 'lenovo care+', '48', '/images/category/164.jpg');
INSERT INTO `dt_category` VALUES ('211', '长辈关爱卡', '48', '/images/category/165.jpg');
INSERT INTO `dt_category` VALUES ('212', '重装系统', '49', '/images/category/166.jpg');
INSERT INTO `dt_category` VALUES ('213', '新机开荒', '49', '/images/category/167.jpg');
INSERT INTO `dt_category` VALUES ('214', '专家上门', '49', '/images/category/168.jpg');
INSERT INTO `dt_category` VALUES ('215', '电脑加速', '49', '/images/category/169.jpg');
INSERT INTO `dt_category` VALUES ('216', '驱动安装', '49', '/images/category/170.jpg');
INSERT INTO `dt_category` VALUES ('217', 'Office365', '49', '/images/category/171.jpg');
INSERT INTO `dt_category` VALUES ('218', '笔记本保养维护', '50', '/images/category/172.jpg');
INSERT INTO `dt_category` VALUES ('219', '笔记本外观清洁', '50', '/images/category/173.jpg');
INSERT INTO `dt_category` VALUES ('220', '清洁工具', '50', '/images/category/174.jpg');
INSERT INTO `dt_category` VALUES ('221', '远程数据恢复', '51', '/images/category/175.jpg');
INSERT INTO `dt_category` VALUES ('222', '硬件开盘数据恢复', '51', '/images/category/176.jpg');
INSERT INTO `dt_category` VALUES ('223', '电脑故障检修服务', '52', '/images/category/177.jpg');
INSERT INTO `dt_category` VALUES ('224', '电脑不见安装服务', '52', '/images/category/178.jpg');
INSERT INTO `dt_category` VALUES ('225', '电脑系统检测服务', '52', '/images/category/179.jpg');
INSERT INTO `dt_category` VALUES ('226', '内存升级', '53', '/images/category/180.jpg');
INSERT INTO `dt_category` VALUES ('227', 'SSD固态硬盘升级', '53', '/images/category/181.jpg');
INSERT INTO `dt_category` VALUES ('228', '台式机整机升级', '53', '/images/category/182.jpg');
INSERT INTO `dt_category` VALUES ('229', '笔记本升级套装', '53', '/images/category/183.png');
INSERT INTO `dt_category` VALUES ('230', '拯救者灯效升级套装', '53', '/images/category/184.jpg');
INSERT INTO `dt_category` VALUES ('238', '一级分类', '0', '/images/category/1575883592922.jpg');
INSERT INTO `dt_category` VALUES ('239', '二级分类', '238', null);
INSERT INTO `dt_category` VALUES ('240', '三级分类', '239', '/images/category/1575883619198.jpg');

-- ----------------------------
-- Table structure for dt_order
-- ----------------------------
DROP TABLE IF EXISTS `dt_order`;
CREATE TABLE `dt_order` (
  `orderId` varchar(10) NOT NULL,
  `name` varchar(16) NOT NULL,
  `account` int(11) NOT NULL,
  `orderTime` varchar(25) NOT NULL,
  `addressId` int(11) NOT NULL,
  `isPay` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`orderId`),
  KEY `fk_order_addressId_address_id` (`addressId`),
  KEY `fk_order_name_user_name` (`name`),
  CONSTRAINT `fk_order_addressId_address_id` FOREIGN KEY (`addressId`) REFERENCES `dt_address` (`id`),
  CONSTRAINT `fk_order_name_user_name` FOREIGN KEY (`name`) REFERENCES `dt_user` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_order
-- ----------------------------
INSERT INTO `dt_order` VALUES ('MI12254457', 'user1', '6899', '2019-12-09 13:06:15.917', '9', '0');
INSERT INTO `dt_order` VALUES ('MI19225046', 'user1', '27596', '2019-11-14 22:47:14.438', '9', '0');
INSERT INTO `dt_order` VALUES ('MI3032759', 'user1', '11956', '2019-11-18 14:46:18.377', '9', '0');
INSERT INTO `dt_order` VALUES ('MI3187301', 'user1', '6666', '2019-11-14 22:00:05.497', '9', '0');
INSERT INTO `dt_order` VALUES ('MI49873622', 'user1', '18597', '2019-11-14 22:44:22.453', '9', '0');
INSERT INTO `dt_order` VALUES ('MI54410074', 'user1', '6899', '2019-12-13 11:16:15.827', '9', '0');
INSERT INTO `dt_order` VALUES ('MI58133582', 'user1', '20897', '2019-11-18 16:06:58.026', '9', '0');
INSERT INTO `dt_order` VALUES ('MI59147874', 'user1', '6666', '2019-11-14 21:57:34.883', '9', '0');
INSERT INTO `dt_order` VALUES ('MI60294484', 'user1', '7899', '2019-12-09 15:22:04.378', '9', '0');
INSERT INTO `dt_order` VALUES ('MI68605325', 'user1', '6666', '2019-11-14 17:26:55.154', '9', '0');
INSERT INTO `dt_order` VALUES ('MI70344351', 'user1', '6666', '2019-11-14 22:41:55.464', '9', '0');
INSERT INTO `dt_order` VALUES ('MI80230959', 'user1', '6666', '2019-11-14 17:30:54.221', '9', '0');
INSERT INTO `dt_order` VALUES ('MI84135075', 'user1', '13798', '2019-12-09 12:57:45.485', '9', '0');
INSERT INTO `dt_order` VALUES ('MI85193592', 'user1', '6666', '2019-11-14 21:57:25.294', '9', '0');
INSERT INTO `dt_order` VALUES ('MI92987878', 'user1', '6899', '2019-11-14 22:53:10.296', '9', '0');

-- ----------------------------
-- Table structure for dt_orderdetail
-- ----------------------------
DROP TABLE IF EXISTS `dt_orderdetail`;
CREATE TABLE `dt_orderdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(10) NOT NULL,
  `pId` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orderDetail_orderId_order_orderId` (`orderId`),
  KEY `fk_orderDetail_pId_product_id` (`pId`),
  CONSTRAINT `fk_orderDetail_orderId_order_orderId` FOREIGN KEY (`orderId`) REFERENCES `dt_order` (`orderid`),
  CONSTRAINT `fk_orderDetail_pId_product_id` FOREIGN KEY (`pId`) REFERENCES `dt_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_orderdetail
-- ----------------------------
INSERT INTO `dt_orderdetail` VALUES ('1', 'MI3187301', '15', '3');
INSERT INTO `dt_orderdetail` VALUES ('2', 'MI3187301', '10', '1');
INSERT INTO `dt_orderdetail` VALUES ('3', 'MI70344351', '9', '1');
INSERT INTO `dt_orderdetail` VALUES ('4', 'MI49873622', '9', '2');
INSERT INTO `dt_orderdetail` VALUES ('5', 'MI49873622', '25', '1');
INSERT INTO `dt_orderdetail` VALUES ('6', 'MI19225046', '9', '4');
INSERT INTO `dt_orderdetail` VALUES ('7', 'MI92987878', '9', '1');
INSERT INTO `dt_orderdetail` VALUES ('8', 'MI3032759', '24', '2');
INSERT INTO `dt_orderdetail` VALUES ('9', 'MI58133582', '9', '1');
INSERT INTO `dt_orderdetail` VALUES ('10', 'MI58133582', '3', '2');
INSERT INTO `dt_orderdetail` VALUES ('11', 'MI84135075', '9', '2');
INSERT INTO `dt_orderdetail` VALUES ('12', 'MI12254457', '9', '1');
INSERT INTO `dt_orderdetail` VALUES ('13', 'MI60294484', '14', '1');
INSERT INTO `dt_orderdetail` VALUES ('14', 'MI54410074', '9', '1');

-- ----------------------------
-- Table structure for dt_product
-- ----------------------------
DROP TABLE IF EXISTS `dt_product`;
CREATE TABLE `dt_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `cid` int(11) NOT NULL,
  `remark` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `price` decimal(10,2) NOT NULL,
  `sale` int(11) NOT NULL DEFAULT '0',
  `rate` int(11) NOT NULL DEFAULT '0',
  `banner` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_product_cid_category_id` (`cid`),
  CONSTRAINT `fk_product_cid_category_id` FOREIGN KEY (`cid`) REFERENCES `dt_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_product
-- ----------------------------
INSERT INTO `dt_product` VALUES ('1', '拯救者 Y7000P 2019 英特尔酷睿i5 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce GTX 1660Ti 6G独显/黑色', '/images/product/avatar/1.jpg', '7999.00', '752', '26687', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('2', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce RTX 2060 6G独显/黑色', '/images/product/avatar/2.jpg', '9599.00', '457', '26680', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('3', '拯救者 Y7000P 2019 英特尔酷睿i5 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce GTX 1650 4G独显/黑色', '/images/product/avatar/3.jpg', '6999.00', '537', '26660', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('4', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 冰魄白', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce GTX 1660Ti 6G独显/冰魄白', '/images/product/avatar/4.jpg', '9248.00', '242', '26614', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('5', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 红色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce RTX 2060 6G独显/红色', '/images/product/avatar/5.jpg', '9699.00', '375', '26475', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('6', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce GTX 1650 4G独显/黑色', '/images/product/avatar/6.jpg', '7999.00', '524', '18465', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('7', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 冰魄白', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/ GeForce RTX 2060 6G独显/冰魄白', '/images/product/avatar/7.jpg', '9898.00', '227', '8556', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('8', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G+8G/1T SSD/ GeForce GTX 1660Ti  6G独显/黑色', '/images/product/avatar/8.jpg', '8999.00', '782', '4137', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('9', '拯救者 Y7000P 15.6英寸游戏笔记本 黑色', '54', '八代英特尔酷睿i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/1T+128G SSD/ GeForce GTX 1050Ti 4G独显/黑色', '/images/product/avatar/9.jpg', '6899.00', '722', '46067', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('10', '拯救者 Y7000P 2019 英特尔酷睿i5 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/15.6英寸/8G/1T SSD/', '/images/product/avatar/10.jpg', '7099.00', '622', '26684', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('11', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 红色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/', '/images/product/avatar/11.jpg', '9099.00', '322', '26067', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('12', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD/', '/images/product/avatar/12.jpg', '7899.00', '922', '39067', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('13', '拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD/', '/images/product/avatar/13.jpg', '8899.00', '422', '10067', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('14', '拯救者 Y7000P 2019 英特尔酷睿i5 15.6英寸专业电竞本 黑色', '54', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD/', '/images/product/avatar/14.jpg', '7899.00', '102', '22067', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('15', '拯救者 Y7000 2019高色域 英特尔酷睿i7 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G/512G SSD/', '/images/product/avatar/15.jpg', '7299.00', '402', '10652', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('16', '拯救者 Y7000 2019高色域 英特尔酷睿i7 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD/', '/images/product/avatar/16.jpg', '7299.00', '500', '10657', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('17', '拯救者 Y7000 大硬盘 英特尔酷睿i5 15.6英寸游戏笔记本 黑色', '55', '八代英特尔酷睿i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G', '/images/product/avatar/17.jpg', '6699.00', '102', '249', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('18', '拯救者 Y7000 15.6英寸游戏笔记本 黑色', '55', 'i5-8300H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G SSD/GeForce GTX', '/images/product/avatar/18.jpg', '6099.00', '320', '249', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('19', '拯救者 Y7000 15.6英寸游戏笔记本 黑色', '55', '八代英特尔酷睿i7-8750H/Windows 10 家庭中文版/15.6英寸/8G/2T+128G', '/images/product/avatar/19.jpg', '7699.00', '290', '249', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('20', '拯救者 Y7000 2019高色域 英特尔酷睿i7 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/16G/1T SSD/', '/images/product/avatar/20.jpg', '8899.00', '10090', '10652', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('21', '拯救者 Y7000 2019高色域 英特尔酷睿i7 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i7-9750H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD/', '/images/product/avatar/21.jpg', '8599.00', '9090', '10652', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('22', '拯救者 Y7000 2019高色域 英特尔酷睿i5 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/8G/512G SSD/', '/images/product/avatar/22.jpg', '7299.00', '6090', '10652', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('23', '拯救者 Y7000 2019高色域 英特尔酷睿i5 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/8G/1T SSD', '/images/product/avatar/23.jpg', '6399.00', '7090', '10713', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('24', '拯救者 Y7000 2019高色域 英特尔酷睿i5 15.6英寸游戏笔记本 黑色', '55', '九代英特尔酷睿i5-9300H/Windows 10 家庭中文版/15.6英寸/8G/512G SSD', '/images/product/avatar/24.jpg', '5978.00', '2090', '10690', '/images/product/banner/1-1.jpg,/images/product/banner/1-2.jpg,/images/product/banner/1-3.jpg,/images/product/banner/1-4.jpg,/images/product/banner/1-5.jpg,/images/product/banner/1-6.jpg', '1');
INSERT INTO `dt_product` VALUES ('25', 'ThinkPad New S2 2019英特尔酷睿i5 银色 20NVA000CD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/256GB SSD/UHD Graphics', '/images/product/avatar/25.jpg', '4799.00', '100', '119', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('26', 'ThinkPad New S2 2019 银色 20NVA000CD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/UHD Graphics', '/images/product/avatar/26.jpg', '5599.00', '90', '119', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('27', 'ThinkPad S3 英特尔酷睿i5 锋芒笔记本电脑钛度灰 20QC000VCD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/256GB SSD/英特尔 UHD 620', '/images/product/avatar/27.jpg', '5399.00', '300', '319', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('28', 'ThinkPad S3 英特尔酷睿i5 锋芒笔记本电脑钛度灰 20QC000VCD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/256GB SSD/独显/14.0英寸', '/images/product/avatar/28.jpg', '5999.00', '199', '316', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('29', 'ThinkPad S3 英特尔酷睿i5 锋芒笔记本电脑钛度灰 20QC000VCD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/独显/14.0英寸', '/images/product/avatar/29.jpg', '6599.00', '109', '316', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('30', 'ThinkPad S3 英特尔酷睿i5 锋芒笔记本电脑钛度灰 20QC000VCD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/UHD 620芯片/14.0', '/images/product/avatar/30.jpg', '6299.00', '119', '316', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('31', 'ThinkPad S3 英特尔酷睿i5 锋芒笔记本电脑钛度灰 20QC000VCD', '92', 'i5-8265U/Windows 10家庭中文版/8GB/512GB SSD/独显/14.0英寸', '/images/product/avatar/31.jpg', '7999.00', '139', '316', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('32', 'ThinkPad New S2 英特尔酷睿i7笔记本电脑银色 20NVA002CD', '92', 'i7-8565U/Windows 10家庭中文版/8GB/512GB SSD/UHD Graphics', '/images/product/avatar/32.jpg', '7399.00', '99', '119', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('33', 'ThinkPad New S2 Yoga 2019 银色 20NVA004CD', '92', 'i5-8565U/Windows 10家庭中文版/8GB/256GB SSD/UHD Graphics', '/images/product/avatar/33.jpg', '6499.00', '109', '119', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('34', 'ThinkPad New S2 Yoga 2019 银色 20NVA002CD 极速送货', '92', 'i7-8565U/Windows 10家庭中文版/8GB/512GB SSD/UHD Graphics', '/images/product/avatar/34.jpg', '7399.00', '0', '0', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('35', 'ThinkPad New S2 2019 银色 20NVA002CD 极速送货', '92', 'i7-8565U/Windows 10家庭中文版/8GB/512GB SSD/UHD Graphics', '/images/product/avatar/35.jpg', '7399.00', '0', '0', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('36', 'ThinkPad S3 锋芒笔记本电脑钛度灰 极速送货(限定区域)', '92', 'i5-8565U/Windows 10家庭中文版/8GB/256GB SSD/独显/14.0英寸', '/images/product/avatar/36.jpg', '5999.00', '10', '4', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('37', 'ThinkPad S3 锋芒笔记本电脑钛度灰 极速送货(限定区域)', '92', 'i5-8565U/Windows 10家庭中文版/8GB/512GB SSD/UHD 620芯片/14.0英寸', '/images/product/avatar/37.jpg', '6299.00', '12', '2', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('38', 'ThinkPad New S2 2019 银色 20NVA000CD 极速送货', '92', 'i5-8565U/Windows 10家庭中文版/8GB/256GB SSD/UHD Graphics', '/images/product/avatar/38.jpg', '4799.00', '10', '3', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('39', 'ThinkPad New S2 2018 银色 20NVA001CD 极速送货', '92', 'i5-8565U/Windows 10家庭中文版/8GB/256GB SSD/集显/银色', '/images/product/avatar/39.jpg', '4799.00', '9', '2', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('40', 'ThinkPad New S2 2018 银色 20L1A001CD 极速送货', '92', 'i5-8565U/Windows 10家庭中文版/8GB/256GB SSD/集显/银色', '/images/product/avatar/40.jpg', '5499.00', '10', '2', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('41', 'ThinkPad S3 锋芒笔记本电脑钛度灰 极速送货(限定区域)', '92', 'i5-8565U/Windows 10家庭中文版/8GB/512GB SSD/独显/14.0英寸', '/images/product/avatar/41.jpg', '6599.00', '10', '2', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('42', 'ThinkPad S3 锋芒笔记本电脑钛度灰 极速送货(限定区域)', '92', 'i5-8565U/Windows 10家庭中文版/8GB/512GB SSD/独显/14.0英寸', '/images/product/avatar/42.jpg', '7999.00', '10', '2', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('43', 'ThinkPad S3 2020 英特尔酷睿i5 笔记本电脑钛度灰 20RG0003CD', '92', '全新十代英特尔酷睿i5-10210U/Windows 10家庭中文版', '/images/product/avatar/43.jpg', '6999.00', '0', '0', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('44', 'ThinkPad S2 Yoga 2020 英特尔酷睿i5笔记本电脑 银色 20R80003CD', '92', '全新十代英特尔酷睿i5-10210U/Windows 10家庭中文版', '/images/product/avatar/44.jpg', '7299.00', '0', '0', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('45', 'ThinkPad S2 2020 英特尔酷睿i5笔记本电脑 银色 20R70003CD', '92', '全新十代英特尔酷睿i5-10210U/Windows 10家庭中文版', '/images/product/avatar/45.jpg', '5999.00', '0', '0', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('46', 'ThinkPad E480 英特尔酷睿i5笔记本电脑 20KNA003CD', '93', 'i5-8520U/Windows 10家庭中文版/8GB/1TB/独显/黑色/14.0英寸', '/images/product/avatar/46.jpg', '4799.00', '450', '765', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('47', 'ThinkPad E480 英特尔酷睿i3 笔记本电脑 20KNA04JCD', '93', 'i3-7130U/Windows 10家庭中文版/4GB/1TB/独显/14.0英寸', '/images/product/avatar/47.jpg', '3499.00', '450', '765', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('48', 'ThinkPad E480 英特尔酷睿i5 笔记本电脑 20KNA003CD', '93', 'i5-8520U/Windows 10家庭中文版/8GB/1TB/独显/黑色/14.0英寸', '/images/product/avatar/48.jpg', '4799.00', '150', '27', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('49', 'ThinkPad E480 笔记本电脑 20KNA001CD', '93', 'i5-8250U/Windows 10家庭中文版/8GB/500GB+128GB SSD/黑色', '/images/product/avatar/49.jpg', '4999.00', '250', '70', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('50', 'ThinkPad E14 英特尔酷睿i7 笔记本电脑 20RA002LCD', '93', '全新十代英特尔酷睿i7-10510U/Windows 10家庭中文版', '/images/product/avatar/50.jpg', '6999.00', '90', '5', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('51', 'ThinkPad E14 英特尔酷睿i5 笔记本电脑 20RA002LCD', '93', '全新十代英特尔酷睿i7-10210U/Windows 10家庭中文版', '/images/product/avatar/51.jpg', '5999.00', '30', '5', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('52', 'ThinkPad E490 笔记本电脑 20N8002XCD', '93', 'i5-8265U/Windows 10家庭版中文版/8G/1T+128GB SSD/独显/14.0英寸', '/images/product/avatar/52.jpg', '5299.00', '990', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('53', 'ThinkPad E490 英特尔酷睿i7 笔记本电脑 20N8A00VCD', '93', 'i7-8565U/Windows 10家庭版中文版/8G/256GB SSD/独显/14.0英寸', '/images/product/avatar/53.jpg', '6599.00', '1090', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('54', 'ThinkPad E490 英特尔酷睿i7 笔记本电脑 20N8A01MCD', '93', 'i7-8565U/Windows 10家庭版中文版/8G/512GB SSD/背光键盘/14.0英寸', '/images/product/avatar/54.jpg', '6299.00', '790', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('55', 'ThinkPad E490 笔记本电脑 20N8A00HCD', '93', 'i5-8265U/Windows 10家庭版中文版/4G/1TB/UHD 620/14.0英寸', '/images/product/avatar/55.jpg', '3999.00', '590', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('56', 'ThinkPad E590 英特尔酷睿i5 笔记本电脑 20NB002XCD', '93', 'i5-8265U/Windows 10家庭版中文版/8G/1TB HD+128GB/独显/', '/images/product/avatar/56.jpg', '5599.00', '400', '266', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('57', 'ThinkPad E490 英特尔酷睿i5 笔记本电脑 20NB002UCD', '93', 'i5-8265U/Windows 10家庭版中文版/8G/256G SSD/独显/', '/images/product/avatar/57.jpg', '5199.00', '850', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('58', 'ThinkPad E580 英特尔酷睿i5 笔记本电脑 20KSA00FCD', '93', 'i5-8250U/Windows 10家庭版中文版/8G/1TB+128GB SSD/独显/', '/images/product/avatar/58.jpg', '5199.00', '410', '308', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('59', 'ThinkPad E590 笔记本电脑 20NB0034CD', '93', 'i7-8565U/Windows 10家庭版中文版/8G/1TB HD+128GB SSD/独显/', '/images/product/avatar/59.jpg', '6599.00', '510', '264', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('60', 'ThinkPad E590 英特尔酷睿7 笔记本电脑 20NBA00DCD', '93', 'i7-8565U/Windows 10家庭版中文版/8G/512GB SSD/独显/', '/images/product/avatar/60.jpg', '6799.00', '904', '264', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('61', 'ThinkPad E490 英特尔酷睿i5 笔记本电脑 20N8A01LCD', '93', 'i5-8265U/Windows 10家庭版中文版/8G/512GB SSD/14英寸FHD LED背光', '/images/product/avatar/61.jpg', '4999.00', '600', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('62', 'ThinkPad E490 笔记本电脑 20NA00XCD', '93', 'i5-8565U/Windows 10家庭版中文版/8G/1TB HD+128GB SSD/14英寸', '/images/product/avatar/62.jpg', '6699.00', '780', '492', '/images/product/banner/2-1.jpg,/images/product/banner/2-2.jpg,/images/product/banner/2-3.jpg,/images/product/banner/2-4.jpg,/images/product/banner/2-5.jpg', '1');
INSERT INTO `dt_product` VALUES ('64', '新增商品成就者', '54', '农村三菜篮子参谋长率', '/images/product/avatar/1575879099953.jpg', '9999.00', '0', '0', '/images/product/banner/1575879114059.png,/images/product/banner/1575879114051.jpg,/images/product/banner/1575879114055.png', '0');
INSERT INTO `dt_product` VALUES ('65', '南昌西站名称值', '240', '超能者澳储行擦擦擦 ', '/images/product/avatar/1575883662908.jpg', '9999.00', '0', '0', '/images/product/banner/1575883673556.jpg,/images/product/banner/1575883682763.jpg,/images/product/banner/1575883691580.jpg,/images/product/banner/1575883691586.jpg,/images/product/banner/1575883691589.jpg', '1');

-- ----------------------------
-- Table structure for dt_user
-- ----------------------------
DROP TABLE IF EXISTS `dt_user`;
CREATE TABLE `dt_user` (
  `name` varchar(16) NOT NULL,
  `pwd` varchar(16) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`name`),
  KEY `uq_phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dt_user
-- ----------------------------
INSERT INTO `dt_user` VALUES ('user1', '123', '13888888888');
INSERT INTO `dt_user` VALUES ('user2', '123', '13566666666');
INSERT INTO `dt_user` VALUES ('user3', '123', null);
INSERT INTO `dt_user` VALUES ('user5', '123', null);

-- ----------------------------
-- View structure for product_category
-- ----------------------------
DROP VIEW IF EXISTS `product_category`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_category` AS select `t1`.`id` AS `id`,`t1`.`name` AS `name`,`t1`.`cid` AS `cid`,`t1`.`remark` AS `remark`,`t1`.`avatar` AS `avatar`,`t1`.`price` AS `price`,`t1`.`sale` AS `sale`,`t1`.`rate` AS `rate`,`t1`.`banner` AS `banner`,`t1`.`status` AS `status`,`t2`.`name` AS `categoryName`,`t3`.`id` AS `subCategoryId`,`t3`.`name` AS `subCategoryName`,`t4`.`id` AS `mainCategoryId`,`t4`.`name` AS `mainCategoryName` from ((((select `dt_product`.`id` AS `id`,`dt_product`.`name` AS `name`,`dt_product`.`cid` AS `cid`,`dt_product`.`remark` AS `remark`,`dt_product`.`avatar` AS `avatar`,`dt_product`.`price` AS `price`,`dt_product`.`sale` AS `sale`,`dt_product`.`rate` AS `rate`,`dt_product`.`banner` AS `banner`,`dt_product`.`status` AS `status` from `dt_product`) `t1` join (select `dt_category`.`id` AS `id`,`dt_category`.`name` AS `name`,`dt_category`.`fid` AS `fid`,`dt_category`.`avatar` AS `avatar` from `dt_category`) `t2` on((`t1`.`cid` = `t2`.`id`))) join (select `dt_category`.`id` AS `id`,`dt_category`.`name` AS `name`,`dt_category`.`fid` AS `fid`,`dt_category`.`avatar` AS `avatar` from `dt_category`) `t3` on((`t2`.`fid` = `t3`.`id`))) join (select `dt_category`.`id` AS `id`,`dt_category`.`name` AS `name`,`dt_category`.`fid` AS `fid`,`dt_category`.`avatar` AS `avatar` from `dt_category`) `t4` on((`t3`.`fid` = `t4`.`id`))) ;

-- ----------------------------
-- Procedure structure for p_addCategory
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_addCategory`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_addCategory`(
	_fid INT,
	_name VARCHAR(20),
  _avatar VARCHAR(100)
)
BEGIN
  INSERT `dt_category`(`fid`, `name`, `avatar`) 
	VALUES(_fid,_name, _avatar);
	SELECT @@IDENTITY AS result;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_addProduct
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_addProduct`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_addProduct`(
	_cid INT,
	_name VARCHAR(20),
  _remark VARCHAR(100),
	_price INT
)
BEGIN
  INSERT `dt_product`(`cid`, `name`, `remark`, `price`) VALUES (_cid,_name,_remark,_price);
	SELECT * FROM `product_category` WHERE `id` = @@IDENTITY;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_addProductToCart
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_addProductToCart`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_addProductToCart`(
	_name varchar(20),
	_pid int,
	_count int,
	_addTime varchar(30)
)
BEGIN
  DECLARE _curCount INT DEFAULT NULL;
	SELECT `count` INTO _curCount FROM `dt_cart` WHERE `pid` = _pid AND `name` = _name;
	IF _curCount IS NULL THEN	-- 如果没有在购物车中存在
		IF _count > 5 THEN
			SELECT '单个商品购买上限为5个' AS 'result';
		ELSE 
			INSERT `dt_cart`(`name`,`pid`,`count`,`addTime`) 
			VALUES(_name, _pid, _count, _addTime);
			SELECT '' AS 'result';
		END IF;
	ELSE 											-- 如果已经在购物车中存在
		IF _curCount + _count > 5 THEN
			SELECT '单个商品购买上限为5个' AS 'result';
		ELSE
			UPDATE `dt_cart` SET `count` = `count` + _count,`addTime` = _addTime
			WHERE `pid` = _pid AND `name` = _name;
			SELECT '' AS 'result';
		END IF;
	END IF;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_changePwd
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_changePwd`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_changePwd`(
	uName varchar(20),
	oldPwd varchar(20),
	newPwd varchar(20)
)
BEGIN
	DECLARE result varchar(20) DEFAULT '原始密码错误';
	DECLARE temp int;

	SELECT count(*) INTO temp FROM dt_admin WHERE `name` = uName AND `pwd` = oldPwd;
	IF temp != 0 THEN
		UPDATE dt_admin SET `pwd` = newPwd WHERE `name` = uName;
		SET result = '';
	END IF;
	SELECT result as result;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_getProductByCondition
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_getProductByCondition`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_getProductByCondition`(
	_name VARCHAR(20),  -- 用户输入的查询名字
	_mId INT,						-- 一级分类id
	_sId INT,						-- 二级分类id
	_cId INT,						-- 三级分类id
  _begin INT,         -- 要查看的数据开始的编号
  _count INT          -- 要查看几条数据
)
BEGIN
	-- 获取按当前条件查询(忽略分页)得到的总记录数
	SELECT COUNT(*) AS total FROM `product_category` WHERE 
	`name` LIKE concat('%',_name,'%') AND 
	(_mId = 0 OR (`mainCategoryId` = _mId AND (_sId = 0 OR(`subCategoryId` = _sId AND (_cId = 0 OR `cid` = _cId)))));
	
	-- 获取按当前条件查询，分页情况下应当返回的记录
	SELECT * FROM `product_category` WHERE 
	`name` LIKE concat('%',_name,'%') AND 
	(_mId = 0 OR (`mainCategoryId` = _mId AND (_sId = 0 OR(`subCategoryId` = _sId AND (_cId = 0 OR `cid` = _cId)))))
	LIMIT _begin,_count;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_orderConfirm
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_orderConfirm`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_orderConfirm`(
	_ids varchar(50),						-- 要结算的购物记录id
	_account int,								-- 结算的总金额
	_orderTime varchar(30),	  -- 订单产生时间
	_name varchar(20),					-- 用户名
	_addressId int              -- 订单地址id
)
BEGIN
	DECLARE _pid INT;
	DECLARE _count INT;
	DECLARE _id varchar(10) DEFAULT '';
	-- 0. 生成一个随机的有效的课单编号id
	DECLARE _orderId varchar(10);
  SET _orderId = CONCAT('MI', CONVERT(FLOOR(RAND() * 100000000),CHAR));
	-- 1. 向dt_order表插入数据
	INSERT `dt_order`(`orderId`,`name`,`account`,`orderTime`,`addressId`) 
	VALUES (_orderId,_name,_account,_orderTime,_addressId);
	-- 2. 向dt_orderDetail表插入数据
  -- 3. 删除dt_cart表的相关数据
	SET _id = substring_index(_ids, ',', 1);
	WHILE LENGTH(_id) > 0 DO
			SELECT `pid`,`count` INTO _pid,_count FROM `dt_cart` WHERE `id` = CONVERT(_id, SIGNED);
			INSERT `dt_orderDetail`(`orderId`,`pid`,`count`) VALUES (_orderId,_pid,_count);

			DELETE FROM `dt_cart` WHERE `id` = CONVERT(_id, SIGNED);
			SET _ids = substring(_ids, length(_id) + 2);
			SET _id = substring_index(_ids, ',', 1);
	END WHILE;
	SELECT _orderId as 'orderId';
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_removeCategory
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_removeCategory`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_removeCategory`(
	_id INT
)
BEGIN
	DECLARE temp INT DEFAULT 0;
	DECLARE result varchar(50) DEFAULT '';

	SELECT COUNT(*) INTO temp FROM `dt_product` WHERE `cid` = _id;
	IF temp > 0 THEN
		SET result = '有商品与当前要删除的分类相关，无法删除..';
	ELSE
		DELETE FROM `dt_category` WHERE `id` = _id;
	END IF;

	SELECT result;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_setDefaultAddress
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_setDefaultAddress`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_setDefaultAddress`(
	_id int,					-- 默认地址id
	_name varchar(20) -- 用户名
)
BEGIN
	UPDATE `dt_address` SET `isDefault` = 0 WHERE `name` = _name;
	UPDATE `dt_address` SET `isDefault` = 1 WHERE `id` = _id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_updateProduct
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_updateProduct`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_updateProduct`(
	_cid INT,
	_name VARCHAR(30),
  _remark VARCHAR(100),
	_price INT,
	_id INT
)
BEGIN
  update `dt_product` set `cid`=_cid,`name`=_name,`remark`=_remark,`price`=_price where `id`=_id;
	SELECT * FROM `product_category` WHERE `id` = _id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_uploadProductAvatar
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_uploadProductAvatar`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_uploadProductAvatar`(
	_filePath varchar(100),
	_id int
)
BEGIN
  declare _avatar varchar(100);
	select `avatar` into _avatar from `dt_product` where `id` = _id;
	update `dt_product` set `avatar` = _filePath where `id` = _id;
	select _avatar as 'avatar';
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for p_uploadProductBanner
-- ----------------------------
DROP PROCEDURE IF EXISTS `p_uploadProductBanner`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_uploadProductBanner`(
	_filePath VARCHAR(500),
	_id INT
)
BEGIN
	DECLARE _temp VARCHAR(500) DEFAULT NULL;
	START TRANSACTION;
	SELECT `banner` INTO _temp FROM `dt_product` WHERE `id` = _id FOR UPDATE;
	IF _temp IS NULL THEN
		UPDATE `dt_product` SET `banner` = _filePath WHERE `id` = _id;
	ELSE
		UPDATE `dt_product` SET `banner` = CONCAT(`banner`, ',', _filePath) 
		WHERE `id` = _id;
	END IF;
	COMMIT;
END
;;
DELIMITER ;
