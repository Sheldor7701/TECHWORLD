/*
 Navicat Premium Data Transfer

 Source Server         : TECH WORLD
 Source Server Type    : Oracle
 Source Server Version : 190000
 Source Host           : localhost:1521
 Source Schema         : C##TECHWORLD

 Target Server Type    : Oracle
 Target Server Version : 190000
 File Encoding         : 65001

 Date: 11/08/2022 13:46:32
*/


-- ----------------------------
-- Table structure for ADVERTISEMENT
-- ----------------------------
DROP TABLE "C##TECHWORLD"."ADVERTISEMENT";
CREATE TABLE "C##TECHWORLD"."ADVERTISEMENT" (
  "ADVERTISEID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "IMAGE" VARCHAR2(50 BYTE) VISIBLE,
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of ADVERTISEMENT
-- ----------------------------

-- ----------------------------
-- Table structure for AVAILABLE_PRODUCTS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS";
CREATE TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS" (
  "PRODUCTID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "STOREID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "QUANTITY" NUMBER VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of AVAILABLE_PRODUCTS
-- ----------------------------

-- ----------------------------
-- Table structure for BRANDS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."BRANDS";
CREATE TABLE "C##TECHWORLD"."BRANDS" (
  "BRANDID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "BRANDNAME" VARCHAR2(2000 BYTE) VISIBLE,
  "LOGO" VARCHAR2(2000 BYTE) VISIBLE,
  "COUNTRY" VARCHAR2(2000 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BRANDS
-- ----------------------------
INSERT INTO "C##TECHWORLD"."BRANDS" VALUES ('001', 'ACER', 'https://i.pinimg.com/736x/75/68/b8/7568b8f2fd4ea6c0b8769890bb08bc9f--best-laptop-brands-acer-laptops.jpg', 'AMERICA');
INSERT INTO "C##TECHWORLD"."BRANDS" VALUES ('002', 'ASUS', 'https://th.bing.com/th/id/OIP.yHVK3jPPJ8ECzBXPopfcBwHaEK?pid=ImgDet&rs=1', 'AMERICA');
INSERT INTO "C##TECHWORLD"."BRANDS" VALUES ('003', 'HP', 'https://th.bing.com/th/id/R.215a85bd5154da5158b17950332129cb?rik=sja84a2o5bbS0Q&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fhp-Logo.jpg&ehk=fuDvUtdkn7sutdagfHayqP7R9VgXNXZwvvKVYI2oQ3M%3d&risl=&pid=ImgRaw&r=0', 'AMERICA');
INSERT INTO "C##TECHWORLD"."BRANDS" VALUES ('004', 'MSI', 'https://computermalaysia.com.my/media/catalog/category/msi-logo-1.png', 'AMERICA');

-- ----------------------------
-- Table structure for BUYS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."BUYS";
CREATE TABLE "C##TECHWORLD"."BUYS" (
  "USERID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "PRODUCTID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "QUANTITY" NUMBER VISIBLE NOT NULL,
  "STOREID" VARCHAR2(550 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BUYS
-- ----------------------------

-- ----------------------------
-- Table structure for CART
-- ----------------------------
DROP TABLE "C##TECHWORLD"."CART";
CREATE TABLE "C##TECHWORLD"."CART" (
  "USERID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "PRODUCTID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "QUANTITY" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CART
-- ----------------------------
INSERT INTO "C##TECHWORLD"."CART" VALUES ('001', '001', '2');
INSERT INTO "C##TECHWORLD"."CART" VALUES ('001', '002', '5');
INSERT INTO "C##TECHWORLD"."CART" VALUES ('002', '001', '3');
INSERT INTO "C##TECHWORLD"."CART" VALUES ('002', '003', '8');

-- ----------------------------
-- Table structure for EMPLOYEE
-- ----------------------------
DROP TABLE "C##TECHWORLD"."EMPLOYEE";
CREATE TABLE "C##TECHWORLD"."EMPLOYEE" (
  "EMPLOYEEID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "NAME" VARCHAR2(50 BYTE) VISIBLE,
  "SALARY" NUMBER VISIBLE,
  "ADDRESS" VARCHAR2(50 BYTE) VISIBLE,
  "STOREID" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of EMPLOYEE
-- ----------------------------

-- ----------------------------
-- Table structure for GRAPHICS_CARD
-- ----------------------------
DROP TABLE "C##TECHWORLD"."GRAPHICS_CARD";
CREATE TABLE "C##TECHWORLD"."GRAPHICS_CARD" (
  "PRODUCTID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "SIZE" NUMBER VISIBLE,
  "RESOLUTION" VARCHAR2(255 BYTE) VISIBLE,
  "BOOST_CLOCK" NUMBER VISIBLE,
  "GAME_CLOCK" NUMBER VISIBLE,
  "CLOCK_INFO" VARCHAR2(255 BYTE) VISIBLE,
  "MEMORY_CLOCK" NUMBER VISIBLE,
  "MEMORY_INTERFACE" VARCHAR2(255 BYTE) VISIBLE,
  "STREAM_PROCESSORS" NUMBER VISIBLE,
  "DISPALY_PORT" NUMBER VISIBLE,
  "HDMI" NUMBER VISIBLE,
  "CONNECTORS" VARCHAR2(550 BYTE) VISIBLE,
  "RECOMMENDED_PSU" VARCHAR2(550 BYTE) VISIBLE,
  "CONSUMPTION" NUMBER VISIBLE,
  "MULTI_DISPLAY" NUMBER VISIBLE,
  "DITERCTX" NUMBER VISIBLE,
  "DIMENSION1" VARCHAR2(255 BYTE) VISIBLE,
  "DIMENSION2" VARCHAR2(255 BYTE) VISIBLE,
  "DIMENSION3" VARCHAR2(255 BYTE) VISIBLE,
  "OTHERS1" VARCHAR2(255 BYTE) VISIBLE,
  "OTHERS2" VARCHAR2(255 BYTE) VISIBLE,
  "OTHERS3" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of GRAPHICS_CARD
-- ----------------------------

-- ----------------------------
-- Table structure for HDD
-- ----------------------------
DROP TABLE "C##TECHWORLD"."HDD";
CREATE TABLE "C##TECHWORLD"."HDD" (
  "PRODUCTID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "INTERFACE_TYPE" VARCHAR2(550 BYTE) VISIBLE,
  "CAPACITY" NUMBER VISIBLE,
  "RPM" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of HDD
-- ----------------------------

-- ----------------------------
-- Table structure for HEADPHONE
-- ----------------------------
DROP TABLE "C##TECHWORLD"."HEADPHONE";
CREATE TABLE "C##TECHWORLD"."HEADPHONE" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "HEADPHONE_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "FREQUENCY" VARCHAR2(50 BYTE) VISIBLE,
  "WEIGHT" VARCHAR2(50 BYTE) VISIBLE,
  "COLOR" VARCHAR2(50 BYTE) VISIBLE,
  "USB_TYPE" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of HEADPHONE
-- ----------------------------

-- ----------------------------
-- Table structure for KEYBOARD
-- ----------------------------
DROP TABLE "C##TECHWORLD"."KEYBOARD";
CREATE TABLE "C##TECHWORLD"."KEYBOARD" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "KEYBOARD_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "LIGHT" VARCHAR2(50 BYTE) VISIBLE,
  "KEYS" VARCHAR2(50 BYTE) VISIBLE,
  "DIMENTION" VARCHAR2(50 BYTE) VISIBLE,
  "COLOR" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of KEYBOARD
-- ----------------------------

-- ----------------------------
-- Table structure for LAPTOP
-- ----------------------------
DROP TABLE "C##TECHWORLD"."LAPTOP";
CREATE TABLE "C##TECHWORLD"."LAPTOP" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "DISPLAY" VARCHAR2(50 BYTE) VISIBLE,
  "GENERATION" VARCHAR2(50 BYTE) VISIBLE,
  "STORAGE" VARCHAR2(50 BYTE) VISIBLE,
  "MEMORY" VARCHAR2(50 BYTE) VISIBLE,
  "PROCESSOR" VARCHAR2(550 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of LAPTOP
-- ----------------------------
INSERT INTO "C##TECHWORLD"."LAPTOP" VALUES ('002', '14', '10TH', '512', 'SSD', 'INTEL CORE I5-1135G7');
INSERT INTO "C##TECHWORLD"."LAPTOP" VALUES ('003', '15', '10TH', '512+1024', 'SSD + HDD', 'INTEL CORE I5-11400H');

-- ----------------------------
-- Table structure for MONITOR
-- ----------------------------
DROP TABLE "C##TECHWORLD"."MONITOR";
CREATE TABLE "C##TECHWORLD"."MONITOR" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "SCREEN_SIZE" VARCHAR2(50 BYTE) VISIBLE,
  "REFRESH_RATE" VARCHAR2(50 BYTE) VISIBLE,
  "MTYPE" VARCHAR2(50 BYTE) VISIBLE,
  "RESOLUTION" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of MONITOR
-- ----------------------------
INSERT INTO "C##TECHWORLD"."MONITOR" VALUES ('001', '24', '75', 'IPS', '1440');
INSERT INTO "C##TECHWORLD"."MONITOR" VALUES ('004', '27', '120', 'IPS', '2160');

-- ----------------------------
-- Table structure for MOUSE
-- ----------------------------
DROP TABLE "C##TECHWORLD"."MOUSE";
CREATE TABLE "C##TECHWORLD"."MOUSE" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "MOUSE_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "BUTTONS" VARCHAR2(50 BYTE) VISIBLE,
  "WEIGHT" VARCHAR2(50 BYTE) VISIBLE,
  "DPI" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of MOUSE
-- ----------------------------

-- ----------------------------
-- Table structure for POWER_SUPPLY
-- ----------------------------
DROP TABLE "C##TECHWORLD"."POWER_SUPPLY";
CREATE TABLE "C##TECHWORLD"."POWER_SUPPLY" (
  "PRODUCTID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "EFFICIENCY" VARCHAR2(255 BYTE) VISIBLE,
  "CERTIFICATION" VARCHAR2(255 BYTE) VISIBLE,
  "FAN_SIZE" NUMBER VISIBLE,
  "MODULAR_TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "TOTAL_POWER" NUMBER VISIBLE,
  "PEAK_POWER" VARCHAR2(255 BYTE) VISIBLE,
  "AC_INPUT" VARCHAR2(255 BYTE) VISIBLE,
  "DC_OUTPUT" VARCHAR2(255 BYTE) VISIBLE,
  "MAIN_POWER" VARCHAR2(255 BYTE) VISIBLE,
  "CPU" VARCHAR2(255 BYTE) VISIBLE,
  "PCI_E" VARCHAR2(255 BYTE) VISIBLE,
  "SATA" NUMBER VISIBLE,
  "MOLEX" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of POWER_SUPPLY
-- ----------------------------

-- ----------------------------
-- Table structure for PROCESSOR
-- ----------------------------
DROP TABLE "C##TECHWORLD"."PROCESSOR";
CREATE TABLE "C##TECHWORLD"."PROCESSOR" (
  "PRODUCTID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "BASE_FREQUENCY" FLOAT(126) VISIBLE,
  "MAXIMUM_TURBO_FREQUENCY" FLOAT(126) VISIBLE,
  "CACHE" NUMBER VISIBLE,
  "CORES" NUMBER VISIBLE,
  "THREADS" NUMBER VISIBLE,
  "PROCESSOR_BASE_POWER" NUMBER VISIBLE,
  "MAXIMUM_TURBO_POWER" NUMBER VISIBLE,
  "MAXIMUM_SIZE" NUMBER VISIBLE,
  "TYPE" VARCHAR2(550 BYTE) VISIBLE,
  "TYPE2" VARCHAR2(550 BYTE) VISIBLE,
  "MAX_NUMBER_OF_CHANNELS" NUMBER VISIBLE,
  "PROCESSOR_GRAPHICS" VARCHAR2(550 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of PROCESSOR
-- ----------------------------

-- ----------------------------
-- Table structure for PRODUCTS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."PRODUCTS";
CREATE TABLE "C##TECHWORLD"."PRODUCTS" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "PRICE" NUMBER VISIBLE,
  "IMAGE" VARCHAR2(2000 BYTE) VISIBLE,
  "STOCK" NUMBER VISIBLE,
  "WARRANTY" NUMBER VISIBLE,
  "BRANDID" VARCHAR2(50 BYTE) VISIBLE,
  "PRODUCT_NAME" VARCHAR2(2000 BYTE) VISIBLE,
  "RELEASE_DATE" DATE VISIBLE,
  "RATING" FLOAT(126) VISIBLE,
  "TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "DETAILS" VARCHAR2(2500 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of PRODUCTS
-- ----------------------------
INSERT INTO "C##TECHWORLD"."PRODUCTS" VALUES ('001', '50000', 'https://www.startech.com.bd/image/cache/catalog/monitor/acer/eb192q/eb192q-01-500x500.jpg', '10', '3', '001', 'Acer EB192Q 18.5 Inch HD Monitor', TO_DATE('2022-05-01 12:02:11', 'SYYYY-MM-DD HH24:MI:SS'), '4.5', 'MONITOR', 'Have The Facility To Play Your Favorite Games And Make Content With The Lenovo 14-Inch IdeaPad Slim 5 Laptop At Your Side. Lenovo IdeaPad Slim 5 Laptop Featuring A 2.1 GHz  AMD Ryzen 5 5500U Processor, 16GB Of DDR4-3200 Memory, And A Quick 512GB NVMe Solid-State Drive, This Laptop Is Meant To Quickly Load And Multitask 3D Games And Applications.');
INSERT INTO "C##TECHWORLD"."PRODUCTS" VALUES ('002', '50000', 'https://www.techlandbd.com/image/cache/wp/gj/Laptop/ASUS/ASUS%20%20VIVOBOOK/vivobook-15-x512jp/blue/vivobook-15-2.jpg-550x550.webp', '10', '2', '002', 'Asus VivoBook 15 X512JP 15.6 Inch Full HD Display Core I5 10th Gen 4GB RAM 512GB SSD Laptop With MX330 2GB Graphics (Peacock Blue)', TO_DATE('2022-06-01 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '4.2', 'LAPTOP', 'Get The Crisp Picture Quality You Crave With This Ultra-Slim, Micro-Edge Display, Featuring Eye-Catching Aluminum Design And Immersive Ultra-Wide Viewing Angles. From Browsing Content To Streaming Entertainment - It Allows You To See Your World In A Whole New Way.');
INSERT INTO "C##TECHWORLD"."PRODUCTS" VALUES ('003', '60000', 'https://www.techlandbd.com/image/cache/wp/gj/Laptop/Hp%20Laptop/%20HP%20ProBook%20440/HP%20ProBook%20440%20G8/HP%20ProBook%20440%20G8-11.jpg-550x550.webp', '15', '5', '003', 'HP Probook 440 G8 14-Inch FHD IPS Display Core I5 11th Gen 8GB RAM 512GB SSD Laptop', TO_DATE('2022-07-11 04:45:01', 'SYYYY-MM-DD HH24:MI:SS'), '4.4', 'LAPTOP', 'All-New 11th Generation Laptop Chips Intel Iris Xe Graphics Delivers Transformational GPU And Integrated Graphics To Support Richer Gaming Experiences And Greater Speed For Designers And Creators.');
INSERT INTO "C##TECHWORLD"."PRODUCTS" VALUES ('004', '70000', 'https://www.techlandbd.com/image/cache/wp/gj/Monitor/Msi/optix/msi-optix-mag272cqr/msi-optix-mag272cqr-3.jpg-550x550.webp', '20', '10', '004', 'MSI OPTIX MAG272CQR 27-Inch WQHD 165Hz Curved Gaming Monitor', TO_DATE('2022-04-12 04:47:55', 'SYYYY-MM-DD HH24:MI:SS'), '4.1', 'MONITOR', 'MSI OPTIX MAG272CQR Monitors Use A Curved Display Panel That Has A Curvature Rate Of 1500R, Which Is The Most Comfortable And Suitable For A Wide Range Of Applications From General Computing To Gaming. Curved Panels Also Help With Gameplay Immersion, Making You Feel More Connected To The Entire Experience.');

-- ----------------------------
-- Table structure for RAM
-- ----------------------------
DROP TABLE "C##TECHWORLD"."RAM";
CREATE TABLE "C##TECHWORLD"."RAM" (
  "PRODUCTID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "TYPE" VARCHAR2(255 BYTE) VISIBLE,
  "CAPACITY" NUMBER VISIBLE,
  "FREQUENCY" NUMBER VISIBLE,
  "OPERATING_VOLTAGE" NUMBER VISIBLE,
  "LATENCY" VARCHAR2(255 BYTE) VISIBLE,
  "HEAT_SINK_COLOR" VARCHAR2(500 BYTE) VISIBLE,
  "PIN" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of RAM
-- ----------------------------

-- ----------------------------
-- Table structure for REVIEWS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."REVIEWS";
CREATE TABLE "C##TECHWORLD"."REVIEWS" (
  "USERID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "PRODUCTID" VARCHAR2(550 BYTE) VISIBLE NOT NULL,
  "RATING" FLOAT(126) VISIBLE NOT NULL,
  "COMMENT" VARCHAR2(2500 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of REVIEWS
-- ----------------------------

-- ----------------------------
-- Table structure for SPEAKER
-- ----------------------------
DROP TABLE "C##TECHWORLD"."SPEAKER";
CREATE TABLE "C##TECHWORLD"."SPEAKER" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "SPEAKER_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "FREQUENCY" VARCHAR2(50 BYTE) VISIBLE,
  "NOISE" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of SPEAKER
-- ----------------------------

-- ----------------------------
-- Table structure for SSD
-- ----------------------------
DROP TABLE "C##TECHWORLD"."SSD";
CREATE TABLE "C##TECHWORLD"."SSD" (
  "PRODUCTID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "CAPACITY" NUMBER VISIBLE,
  "FORM FACTOR" VARCHAR2(255 BYTE) VISIBLE,
  "FLASH TYPE" VARCHAR2(1000 BYTE) VISIBLE,
  "INTERFACE" VARCHAR2(1000 BYTE) VISIBLE,
  "SEQ_READS" NUMBER VISIBLE,
  "SEQ_WRITES" NUMBER VISIBLE,
  "DIMENSION" VARCHAR2(550 BYTE) VISIBLE,
  "WEIGHT" FLOAT(126) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of SSD
-- ----------------------------

-- ----------------------------
-- Table structure for STORE
-- ----------------------------
DROP TABLE "C##TECHWORLD"."STORE";
CREATE TABLE "C##TECHWORLD"."STORE" (
  "STOREID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "ADDRESS" VARCHAR2(50 BYTE) VISIBLE,
  "NUMBER_OF_EMPLOYEES" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of STORE
-- ----------------------------

-- ----------------------------
-- Table structure for UPS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."UPS";
CREATE TABLE "C##TECHWORLD"."UPS" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "UPS_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "CAPACITY" VARCHAR2(50 BYTE) VISIBLE,
  "BATTERY" VARCHAR2(50 BYTE) VISIBLE,
  "BACKUP_TIME" VARCHAR2(50 BYTE) VISIBLE,
  "PORTS" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of UPS
-- ----------------------------

-- ----------------------------
-- Table structure for USERS
-- ----------------------------
DROP TABLE "C##TECHWORLD"."USERS";
CREATE TABLE "C##TECHWORLD"."USERS" (
  "USERID" VARCHAR2(250 BYTE) VISIBLE NOT NULL,
  "NAME" VARCHAR2(250 BYTE) VISIBLE,
  "EMAIL" VARCHAR2(250 BYTE) VISIBLE,
  "PASSWORD" VARCHAR2(250 BYTE) VISIBLE,
  "ADDRESS" VARCHAR2(250 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of USERS
-- ----------------------------
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('12', 'Saimon Huda', '1905056@ugrad.cse.buet.ac.bd', 'saimon56', 'Feni');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('011', 'Sadif Ahmed', '1905058@ugrad.cse.buet.ac.bd', 'sadif58', 'Mdpur');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('001', 'Souvik Ghosh', '1905073@ugrad.cse.buet.ac.bd', 'souvik73', 'Kallyanpur, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('002', 'Arnab Bhattacharjee', '1905065@ugrad.cse.buet.ac.bd', 'arnab65', 'Bakshibazar, Dhaka South');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('003', 'Sojib Zaman', '1905067@ugrad.cse.buet.ac.bd', 'sojib67', 'Mdpur, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('004', 'Tanvir Saad', '1905090@ugrad.cse.buet.ac.bd', 'saad90', 'Hall, Buet');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('005', 'Sayem Sahad', '1905064@ugrad.cse.buet.ac.bd', 'sayem64', 'Farmgate, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('006', 'Abir Muhtasim', '1905066@ugrad.cse.buet.ac.bd', 'abir66', 'Hall, Buet');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('007', 'Nazmus Sakib', '1905061@ugrad.cse.buet.ac.bd', 'sakib61', 'Komilla');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('008', 'Mahir Labib Dihan', '1905072@ugrad.cse.buet.ac.bd', 'dihan72', 'MDpur, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('009', 'Mashroor Bhuiyan', '1905069@ugrad.cse.buet.ac.bd', 'mashroor69', 'Mdpur, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('010', 'Anindya Haque', '1905070@ugrad.cse.buet.ac.bd', 'anindya70', 'Lalmatia, Dhaka');
INSERT INTO "C##TECHWORLD"."USERS" VALUES ('13', 'Johora Ava', '1905022@ugrad.cse.buet.ac.bd', 'ava22', 'Mirpur, Dhaka');

-- ----------------------------
-- Table structure for WEBCAM
-- ----------------------------
DROP TABLE "C##TECHWORLD"."WEBCAM";
CREATE TABLE "C##TECHWORLD"."WEBCAM" (
  "PRODUCTID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "WEBCAM_TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "RESOLUTION" VARCHAR2(50 BYTE) VISIBLE,
  "WEIGHT" VARCHAR2(50 BYTE) VISIBLE,
  "MICROPHONE" VARCHAR2(50 BYTE) VISIBLE,
  "ZOOM" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of WEBCAM
-- ----------------------------

-- ----------------------------
-- Function structure for INSERT_USER
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##TECHWORLD"."INSERT_USER" AS
BEGIN
 SELECT MAX(USERID)  INTO TOTAL
 FROM USERS ;
 TOT:= TO_NUMBER(TOTAL);
 TOT:= TOT+1;
	        INSERT INTO
        USERS        
				 VALUES(
						TO_CHAR(TOT),
            UNAME,
            EMAIL1,
            PASS,
            ADDRESS1

        );
				
				
END ;
/

-- ----------------------------
-- Function structure for TEMP_PROC
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "C##TECHWORLD"."TEMP_PROC" AS
BEGIN
	SELECT TYPE FROM PRODUCTS INTO ptype WHERE PRODUCTID=P_id;
	IF ptype='LAPTOP' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN LAPTOP
			WHERE PRODUCTID=P_id;
	ELSIF ptype='MONITOR' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN MONITOR
			WHERE PRODUCTID=P_id;
	ELSIF ptype='SPEAKER' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN SPEAKER
			WHERE PRODUCTID=P_id;
	ELSIF ptype='HEADPHONE' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN HEADPHONE
			WHERE PRODUCTID=P_id;
	ELSIF ptype='MOUSE' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN MOUSE
			WHERE PRODUCTID=P_id;
	ELSIF ptype='KEYBOARD' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN KEYBOARD
			WHERE PRODUCTID=P_id;
	ELSIF ptype='KEYBOARD' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN KEYBOARD
			WHERE PRODUCTID=P_id;
	ELSIF ptype='WEBCAM' THEN
      SELECT * FROM PRODUCTS NATURAL JOIN WEBCAM
			WHERE PRODUCTID=P_id;
END IF;

END;
/

-- ----------------------------
-- Primary Key structure for table ADVERTISEMENT
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."ADVERTISEMENT" ADD CONSTRAINT "SYS_C007742" PRIMARY KEY ("ADVERTISEID", "PRODUCTID");

-- ----------------------------
-- Primary Key structure for table AVAILABLE_PRODUCTS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS" ADD CONSTRAINT "SYS_C007881" PRIMARY KEY ("PRODUCTID", "STOREID");

-- ----------------------------
-- Checks structure for table AVAILABLE_PRODUCTS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS" ADD CONSTRAINT "SYS_C007880" CHECK ("QUANTITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table BRANDS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."BRANDS" ADD CONSTRAINT "SYS_C007743" PRIMARY KEY ("BRANDID");

-- ----------------------------
-- Primary Key structure for table BUYS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007874" PRIMARY KEY ("USERID", "PRODUCTID", "STOREID");

-- ----------------------------
-- Checks structure for table BUYS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007884" CHECK ("QUANTITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007885" CHECK ("STOREID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table CART
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."CART" ADD CONSTRAINT "SYS_C007858" PRIMARY KEY ("USERID", "PRODUCTID");

-- ----------------------------
-- Primary Key structure for table EMPLOYEE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."EMPLOYEE" ADD CONSTRAINT "SYS_C007741" PRIMARY KEY ("EMPLOYEEID");

-- ----------------------------
-- Primary Key structure for table GRAPHICS_CARD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."GRAPHICS_CARD" ADD CONSTRAINT "SYS_C007907" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Checks structure for table GRAPHICS_CARD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."GRAPHICS_CARD" ADD CONSTRAINT "SYS_C007906" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table HDD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."HDD" ADD CONSTRAINT "SYS_C007901" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table HEADPHONE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."HEADPHONE" ADD CONSTRAINT "SYS_C007734" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table KEYBOARD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."KEYBOARD" ADD CONSTRAINT "SYS_C007732" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table LAPTOP
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."LAPTOP" ADD CONSTRAINT "SYS_C007730" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table MONITOR
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."MONITOR" ADD CONSTRAINT "SYS_C007731" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table MOUSE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."MOUSE" ADD CONSTRAINT "SYS_C007733" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table POWER_SUPPLY
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."POWER_SUPPLY" ADD CONSTRAINT "SYS_C007910" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Checks structure for table POWER_SUPPLY
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."POWER_SUPPLY" ADD CONSTRAINT "SYS_C007909" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table PROCESSOR
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."PROCESSOR" ADD CONSTRAINT "SYS_C007896" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Checks structure for table PROCESSOR
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."PROCESSOR" ADD CONSTRAINT "SYS_C007895" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table PRODUCTS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."PRODUCTS" ADD CONSTRAINT "SYS_C007739" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table RAM
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."RAM" ADD CONSTRAINT "SYS_C007904" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Checks structure for table RAM
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."RAM" ADD CONSTRAINT "SYS_C007903" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table REVIEWS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007892" PRIMARY KEY ("USERID", "PRODUCTID");

-- ----------------------------
-- Checks structure for table REVIEWS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007889" CHECK ("USERID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007890" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007891" CHECK ("RATING" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table SPEAKER
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."SPEAKER" ADD CONSTRAINT "SYS_C007736" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table SSD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."SSD" ADD CONSTRAINT "SYS_C007899" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Checks structure for table SSD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."SSD" ADD CONSTRAINT "SYS_C007898" CHECK ("PRODUCTID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table STORE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."STORE" ADD CONSTRAINT "SYS_C007740" PRIMARY KEY ("STOREID");

-- ----------------------------
-- Primary Key structure for table UPS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."UPS" ADD CONSTRAINT "SYS_C007735" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Primary Key structure for table USERS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."USERS" ADD CONSTRAINT "SYS_C007738" PRIMARY KEY ("USERID");

-- ----------------------------
-- Primary Key structure for table WEBCAM
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."WEBCAM" ADD CONSTRAINT "SYS_C007737" PRIMARY KEY ("PRODUCTID");

-- ----------------------------
-- Foreign Keys structure for table ADVERTISEMENT
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."ADVERTISEMENT" ADD CONSTRAINT "SYS_C007878" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table AVAILABLE_PRODUCTS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS" ADD CONSTRAINT "SYS_C007882" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."AVAILABLE_PRODUCTS" ADD CONSTRAINT "SYS_C007883" FOREIGN KEY ("STOREID") REFERENCES "C##TECHWORLD"."STORE" ("STOREID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table BUYS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007875" FOREIGN KEY ("USERID") REFERENCES "C##TECHWORLD"."USERS" ("USERID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007876" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."BUYS" ADD CONSTRAINT "SYS_C007887" FOREIGN KEY ("STOREID") REFERENCES "C##TECHWORLD"."STORE" ("STOREID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table CART
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."CART" ADD CONSTRAINT "SYS_C007865" FOREIGN KEY ("USERID") REFERENCES "C##TECHWORLD"."USERS" ("USERID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."CART" ADD CONSTRAINT "SYS_C007866" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table EMPLOYEE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."EMPLOYEE" ADD CONSTRAINT "SYS_C007888" FOREIGN KEY ("STOREID") REFERENCES "C##TECHWORLD"."STORE" ("STOREID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table GRAPHICS_CARD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."GRAPHICS_CARD" ADD CONSTRAINT "SYS_C007908" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table HDD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."HDD" ADD CONSTRAINT "SYS_C007902" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table HEADPHONE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."HEADPHONE" ADD CONSTRAINT "SYS_C007868" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table KEYBOARD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."KEYBOARD" ADD CONSTRAINT "SYS_C007869" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table LAPTOP
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."LAPTOP" ADD CONSTRAINT "SYS_C007863" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table MONITOR
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."MONITOR" ADD CONSTRAINT "SYS_C007864" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table MOUSE
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."MOUSE" ADD CONSTRAINT "SYS_C007870" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table POWER_SUPPLY
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."POWER_SUPPLY" ADD CONSTRAINT "SYS_C007911" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PROCESSOR
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."PROCESSOR" ADD CONSTRAINT "SYS_C007897" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PRODUCTS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."PRODUCTS" ADD CONSTRAINT "SYS_C007867" FOREIGN KEY ("BRANDID") REFERENCES "C##TECHWORLD"."BRANDS" ("BRANDID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table RAM
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."RAM" ADD CONSTRAINT "SYS_C007905" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table REVIEWS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007893" FOREIGN KEY ("USERID") REFERENCES "C##TECHWORLD"."USERS" ("USERID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "C##TECHWORLD"."REVIEWS" ADD CONSTRAINT "SYS_C007894" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table SPEAKER
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."SPEAKER" ADD CONSTRAINT "SYS_C007871" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table SSD
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."SSD" ADD CONSTRAINT "SYS_C007900" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table UPS
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."UPS" ADD CONSTRAINT "SYS_C007872" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table WEBCAM
-- ----------------------------
ALTER TABLE "C##TECHWORLD"."WEBCAM" ADD CONSTRAINT "SYS_C007873" FOREIGN KEY ("PRODUCTID") REFERENCES "C##TECHWORLD"."PRODUCTS" ("PRODUCTID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
