Go
Create DATABASE ATDFinal
GO
USE ATDFinal
GO


GO
create table roles(
    id int IDENTITY(1,1) PRIMARY KEY,
    role_name VARCHAR(30),
    create_date DATETIME
)

CREATE TABLE users(
    id int IDENTITY(1,1) PRIMARY KEY,
    role_id int,
    username varchar(50),
    password varchar(100),
    fullname VARCHAR(50),
    create_date DATETIME,
    address VARCHAR(100),
    phonenumber VARCHAR(30),
)

select * From products

INSERT INTO users (role_id, username, password, fullname, create_date,address,phonenumber) VALUES 
(2, 'admin1@admin.com', '$2a$12$d7E/S04CiOBQtgBgLGA2YeXG1x7p.dzvAbf4o./DooS3NS/WmcczC', 'John Smith', CURRENT_TIMESTAMP,'Suite 945 6672 Season Bypass, East Akilah, RI 93301
','+17068650744')

select * From category

Create TABLE category(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name_cate varchar(30)
)

Create table colors(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(20)
)
Create table capacitys(
    id INT IDENTITY(1,1) PRIMARY KEY,
    archive int
)

Create table products(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100),
    quantity_instock int,
    category_id int,
    color_id int,
    capacity_id int,
    price DECIMAL,
    [desc] text,
    image text,
    sale_percent int,
    create_date DATETIME
)



CREATE TABLE ratingproduct(
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id int,
    product_id int,
    content text,
    rate_point int
)

Create table orders(
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    fullname VARCHAR(100),
    address varchar(100),
    total_price DECIMAL,
    order_date DATETIME,
    status VARCHAR(50)
)


Create table orderitem(
    order_id int,
    product_id int,
    price DECIMAL,
    quantity int,
    totalprice DECIMAL,
    PRIMARY KEY(order_id,product_id)
)
select * From products  id IN (1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017)

delete products where id IN (1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017)
ALTER TABLE users ADD CONSTRAINT fk_users_role_id FOREIGN KEY(role_id) REFERENCES roles(id)
ALTER TABLE products ADD CONSTRAINT fk_products_color_id FOREIGN KEY(color_id) REFERENCES colors(id)
ALTER TABLE products ADD CONSTRAINT fk_products_capacity_id FOREIGN KEY(capacity_id) REFERENCES capacitys(id)
ALTER TABLE products ADD CONSTRAINT fk_products_category_id FOREIGN KEY(category_id) REFERENCES category(id)
ALTER TABLE ratingproduct ADD CONSTRAINT fk_ratingproduct_user_id FOREIGN KEY(user_id) REFERENCES users(id)
ALTER TABLE ratingproduct ADD CONSTRAINT fk_ratingproduct_product_id FOREIGN KEY(product_id) REFERENCES products(id)
ALTER TABLE promo ADD CONSTRAINT fk_promo_product_id FOREIGN KEY(product_id) REFERENCES products(id)
ALTER TABLE orders ADD CONSTRAINT fk_promo_user_id FOREIGN KEY(user_id) REFERENCES users(id)
ALTER TABLE orderitem ADD CONSTRAINT fk_orderitem_order_id FOREIGN KEY(order_id) REFERENCES orders(id)
ALTER TABLE orderitem ADD CONSTRAINT fk_orderitem_product_id FOREIGN KEY(product_id) REFERENCES products(id)

GO
--Insert here


INSERT INTO roles (role_name, create_date)
VALUES ('ADMIN', CURRENT_TIMESTAMP)
INSERT INTO roles (role_name, create_date)
VALUES ('USER', CURRENT_TIMESTAMP)
INSERT INTO users (role_id, username, password, fullname, create_date) VALUES (2, 'jessica@gmail.com', '$2a$12$DgSYbPO4WPQXIKxnvJI/NumMoISdF3sC1IGDHkOdl6EN81Ffcob8a', 'Jessica Rodriguez', '2022-10-10 14:00:00')
INSERT INTO users (role_id, username, password, fullname, create_date) VALUES (1, 'admin@admin.com', '$2a$12$DgSYbPO4WPQXIKxnvJI/NumMoISdF3sC1IGDHkOdl6EN81Ffcob8a', 'Jessica Rodriguez', '2022-10-10 14:00:00')
INSERT INTO users (role_id, username, password, fullname, create_date) VALUES (1, 'an@an.com', '$2a$12$zJjGsKfUTBLOHZXVmTuXT.ffgmuhr8c0sATjoeESkFy3Dwcb86Y6O', 'An Admin', '2022-10-10 14:00:00')
INSERT INTO users (role_id, username, password, fullname, create_date) VALUES (1, 'Duy@duy.com', '$2a$12$I9i3RhbnroiKjeEAP4azqOehTJYhoqeNYdOxDp7j4Gz7qTqF0KRZC', 'Duy Admin', '2022-10-10 14:00:00')
INSERT INTO users (role_id, username, password, fullname, create_date) VALUES 
(1, 'Tran@tran.com', '$2a$12$TyjSIJhJ6Hua9XHwCk4MC.mUYVx1MDeWuSQyNazwugRZ99N2N0JrS', 'Tran Admin', '2022-10-10 14:00:00'),
(2, 'john.smith@example.com', 'password1', 'John Smith', CURRENT_TIMESTAMP),
    (2, 'emma.johnson@example.com', 'password2', 'Emma Johnson', CURRENT_TIMESTAMP),
    (2, 'michael.davis@example.com', 'password3', 'Michael Davis', CURRENT_TIMESTAMP),
    (2, 'olivia.brown@example.com', 'password4', 'Olivia Brown', CURRENT_TIMESTAMP),
    (2, 'william.wilson@example.com', 'password5', 'William Wilson', CURRENT_TIMESTAMP),
    (2, 'sophia.taylor@example.com', 'password6', 'Sophia Taylor', CURRENT_TIMESTAMP),
    (2, 'james.anderson@example.com', 'password7', 'James Anderson', CURRENT_TIMESTAMP),
    (2, 'isabella.thomas@example.com', 'password8', 'Isabella Thomas', CURRENT_TIMESTAMP),
    (2, 'benjamin.martinez@example.com', 'password9', 'Benjamin Martinez', CURRENT_TIMESTAMP),
    (2, 'mia.clark@example.com', 'password10', 'Mia Clark', CURRENT_TIMESTAMP),
    (2, 'liam.johnson@example.com', 'password11', 'Liam Johnson', CURRENT_TIMESTAMP),
    (2, 'ava.miller@example.com', 'password12', 'Ava Miller', CURRENT_TIMESTAMP),
    (2, 'noah.davis@example.com', 'password13', 'Noah Davis', CURRENT_TIMESTAMP),
    (2, 'isabella.smith@example.com', 'password14', 'Isabella Smith', CURRENT_TIMESTAMP),
    (2, 'james.johnson@example.com', 'password15', 'James Johnson', CURRENT_TIMESTAMP),
    (2, 'sophia.wilson@example.com', 'password16', 'Sophia Wilson', CURRENT_TIMESTAMP),
    (2, 'logan.anderson@example.com', 'password17', 'Logan Anderson', CURRENT_TIMESTAMP),
    (2, 'mia.thomas@example.com', 'password18', 'Mia Thomas', CURRENT_TIMESTAMP),
    (2, 'ethan.martinez@example.com', 'password19', 'Ethan Martinez', CURRENT_TIMESTAMP),
    (2, 'ava.clark@example.com', 'password20', 'Ava Clark', CURRENT_TIMESTAMP),
    (2, 'oliver.jones@example.com', 'password21', 'Oliver Jones', CURRENT_TIMESTAMP),
    (2, 'amelia.miller@example.com', 'password22', 'Amelia Miller', CURRENT_TIMESTAMP),
    (2, 'benjamin.davis@example.com', 'password23', 'Benjamin Davis', CURRENT_TIMESTAMP),
    (2, 'mia.smith@example.com', 'password24', 'Mia Smith', CURRENT_TIMESTAMP),
    (2, 'lucas.johnson@example.com', 'password25', 'Lucas Johnson', CURRENT_TIMESTAMP),
    (2, 'olivia.wilson@example.com', 'password26', 'Olivia Wilson', CURRENT_TIMESTAMP),
    (2, 'logan.anderson@example.com', 'password27', 'Logan Anderson', CURRENT_TIMESTAMP),
    (2, 'mia.thomas@example.com', 'password28', 'Mia Thomas', CURRENT_TIMESTAMP),
    (2, 'ethan.martinez@example.com', 'password29', 'Ethan Martinez', CURRENT_TIMESTAMP),
    (2, 'ava.clark@example.com', 'password30', 'Ava Clark', CURRENT_TIMESTAMP),
    (2, 'oliver.jones@example.com', 'password31', 'Oliver Jones', CURRENT_TIMESTAMP),
    (2, 'amelia.miller@example.com', 'password32', 'Amelia Miller', CURRENT_TIMESTAMP),
    (2, 'benjamin.davis@example.com', 'password33', 'Benjamin Davis', CURRENT_TIMESTAMP),
    (2, 'mia.smith@example.com', 'password34', 'Mia Smith', CURRENT_TIMESTAMP),
    (2, 'lucas.johnson@example.com', 'password35', 'Lucas Johnson', CURRENT_TIMESTAMP),
    (2, 'olivia.wilson@example.com', 'password36', 'Olivia Wilson', CURRENT_TIMESTAMP),
    (2, 'liam.johnson@example.com', 'password37', 'Liam Johnson', CURRENT_TIMESTAMP),
    (2, 'ava.miller@example.com', 'password38', 'Ava Miller', CURRENT_TIMESTAMP),
    (2, 'noah.davis@example.com', 'password39', 'Noah Davis', CURRENT_TIMESTAMP),
    (2, 'isabella.smith@example.com', 'password40', 'Isabella Smith', CURRENT_TIMESTAMP),
    (2, 'james.johnson@example.com', 'password41', 'James Johnson', CURRENT_TIMESTAMP),
    (2, 'sophia.wilson@example.com', 'password42', 'Sophia Wilson', CURRENT_TIMESTAMP),
    (2, 'logan.anderson@example.com', 'password43', 'Logan Anderson', CURRENT_TIMESTAMP),
    (2, 'mia.thomas@example.com', 'password44', 'Mia Thomas', CURRENT_TIMESTAMP),
    (2, 'ethan.martinez@example.com', 'password45', 'Ethan Martinez', CURRENT_TIMESTAMP)
    

--Insert Category
INSERT INTO category (name_cate) VALUES ('iPhone')
INSERT INTO category (name_cate) VALUES ('MacBook')
INSERT INTO category (name_cate) VALUES ('iPad')
INSERT INTO category (name_cate) VALUES ('Apple Watch')
INSERT INTO category (name_cate) VALUES ('AirPods')
INSERT INTO category (name_cate) VALUES ('Mac')
INSERT INTO category (name_cate) VALUES ('Apple TV')
INSERT INTO category (name_cate) VALUES ('Accessories')

--Insert Color
INSERT INTO colors (name) VALUES ('Midnight')
INSERT INTO colors (name) VALUES ('Starlight')
INSERT INTO colors (name) VALUES ('Silver')
INSERT INTO colors (name) VALUES ('Gold')
INSERT INTO colors (name) VALUES ('Rose Gold')
INSERT INTO colors (name) VALUES ('Midnight Green')
INSERT INTO colors (name) VALUES ('Yellow')
INSERT INTO colors (name) VALUES ('Space Gray')
INSERT INTO colors (name) VALUES ('Blue')
INSERT INTO colors (name) VALUES ('Purple')
INSERT INTO colors (name) VALUES ('Pink')
INSERT INTO colors (name) VALUES ('Green')
INSERT INTO colors (name) VALUES ('Black')
INSERT INTO colors (name) VALUES ('White')


--Insert Cap
INSERT INTO capacitys (archive) VALUES (32)
INSERT INTO capacitys (archive) VALUES (64)
INSERT INTO capacitys (archive) VALUES (128)
INSERT INTO capacitys (archive) VALUES (256)
INSERT INTO capacitys (archive) VALUES (512)
INSERT INTO capacitys (archive) VALUES (1024)
INSERT INTO capacitys (archive) VALUES (1000)
INSERT INTO capacitys (archive) VALUES (2000)


GO
INSERT INTO products (name, quantity_instock, category_id, color_id, capacity_id, price, [desc], image, sale_percent, create_date) VALUES 
('Ipad Air', 7, 3, 8, 4, 769.49, 'iPad Air is a popular tablet from Apple that combines a sleek design with powerful performance. It features a sharp Retina display, efficient A-series processor, and compatibility with Apple Pencil and Smart Keyboard. It offers a versatile and portable option for users looking for a high-quality tablet experience.', 'IpadAir.jpg', 10, '2024-02-28 08:20:00'),
('Ipad Pro', 8, 3, 3, 5, 1141.41, 'iPad Pro is a premium version of tablet computer. It features a large display, powerful performance, and compatibility with Apple Pencil and Magic Keyboard, enhancing creative capabilities and multitasking.', 'IpadPro.jpg', 15, '2024-02-29 13:55:00'),
('Apple Watch Ultra 2', 10, 4, 2, 2, 893.00, 'Apple Watch Ultra 2 is crafted to deliver unparalleled performance. The lightweight yet durable titanium casing is corrosion-resistant and designed to protrude, protecting the sapphire glass face from edge impacts.', 'AppleWatchUltra2.jpg', 10, '2024-02-29 19:40:00'),
('Apple Watch Series 9', 11, 4, 3, 2, 399.00, 'The Apple Watch Series 9 is now more powerful than ever thanks to the new S9 SiP, which enhances performance and features. It introduces a magical double-tap gesture, a brighter display, faster on-device Siri, and now includes added health data access and tracking. It also features the Precision Locate feature for iPhone, along with many other fantastic upgrades.', 'AppleWatchSeries9.jpg', 5, '2024-02-29 08:55:00'),
('Apple Watch SE Midnight', 3, 4, 1, 1, 1177.14, 'Apple Watch can do what your other devices can’t because it’s on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, innovative safety features, and a connection to the people you care about most.', 'AppleWatchSE.jpg', 15, '2024-02-27 14:50:00'),
('iMac 256GB 24-inch 4.5K Retina', 5, 6, 9, 4, 1277.25, 'With its expansive 24‑inch Retina display, iMac offers a brilliant canvas for multitasking, immersive movies and games, and so much more. The display’s 4.5K resolution delivers ultraclear detail and shines with 500 nits of brightness. That’s five times the resolution of and nearly 70 percent brighter than the best-selling 24‑inch all‑in‑one PC. And P3 wide color brings whatever you’re watching to life in over a billion colors. No matter what you do, it will look incredible on iMac.', 'iMac-Blue.jpg', 0, '2023-10-15 09:30:00'),
('MacBook Air', 9, 2, 1, 4, 1298.99, 'MacBook Air is a lightweight and portable laptop from Apple. It features a stunning Retina display, fast performance with M1 chip of Apple, and a reliable battery life. It is a great choice for users who prioritize mobility and productivity.', 'MacBookAir.jpg', 5, '2024-02-29 17:10:00'),
('AirPods Max Silver', 10, 5, 2, null, 549.99, 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.', 'AirPodsMax-Silver.png', 10, '2023-11-18 10:30:00'),
('AirPods Max Space Gray', 10, 5, 8, null, 549.99, 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.', 'AirPodsMax-SpaceGray.png', 10, '2023-11-18 10:30:00'),
('AirPods Max Green', 10, 5, 12, null, 549.99, 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.', 'AirPodsMax-Green.png', 10, '2023-11-18 10:30:00'),
('AirPods Max Pink', 10, 5, 11, null, 549.99, 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.', 'AirPodsMax-Pink.png', 10, '2023-11-18 10:30:00'),
('AirPods Max Sky Blue', 10, 5, 9, null, 549.99, 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.', 'AirPodsMax-Blue.png', 10, '2023-11-18 10:30:00'),
('AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)', 20, 5, null, null, 236.19, 'Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level. And a single charge delivers 6 hours of battery life.', 'AirPodsPro2.png', 10, '2023-11-18 10:30:00'),
('AirPods (2nd generation)', 20, 5, null, null, 140.39, '"Wireless. Effortless. Magical" with plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.', 'AirPods2.png', 15, '2023-11-18 10:30:00'),
('AirPods (3rd generation) with Lightning Charging Case', 20, 5, null, null, 178.71, 'Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater.AirPods, the Lightning Charging Case, and the MagSafe Charging Case are rated IPX4 sweat and water resistant, so they’ll withstand anything from rain to heavy workouts.', 'AirPods3.png', 10, '2023-11-18 10:30:00'),
('AirPods (3rd generation) with MagSafe Charging Case', 20, 5, null, null, 191.49, 'Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater.AirPods, the Lightning Charging Case, and the MagSafe Charging Case are rated IPX4 sweat and water resistant, so they’ll withstand anything from rain to heavy workouts.', 'AirPods3.png', 10, '2023-11-18 10:30:00'),
('iPhone SE Starlight 128GB',2, 1, 2, 3, 486.38, 'iPhone SE is a compact smartphone from Apple, featuring a 4.7-inch Retina display and powerful performance powered by the A13 Bionic chip. It has a high-quality camera that supports portrait photography and 4K video recording. The iPhone SE offers a great experience for users who want a powerful iOS device in a compact design.', 'iPhoneSE-Starlight.jpg', 10, '2016-03-15 10:25:00'),
('iPhone SE Midnight 128GB',2, 1, 1, 3, 486.38, 'iPhone SE is a compact smartphone from Apple, featuring a 4.7-inch Retina display and powerful performance powered by the A13 Bionic chip. It has a high-quality camera that supports portrait photography and 4K video recording. The iPhone SE offers a great experience for users who want a powerful iOS device in a compact design.', 'iPhoneSE-Midnight.jpg', 10, '2016-03-15 10:25:00'),
('iPhone 13 Starlight 256GB',4, 1, 2, 4, 556.12, 'With relentless advancements for their smartphones, Apple is a brand that consistently earns the trust of consumers in Vietnam. The recently launched iPhone 13 lineup, featuring new colors and significant hardware upgrades, has garnered a great deal of attention from enthusiasts.', 'iPhone13-Starlight.jpg', 10, '2018-02-10 09:15:00'),
('iPhone 13 Midnight 256GB',5, 1, 1, 4, 556.12, 'With relentless advancements for their smartphones, Apple is a brand that consistently earns the trust of consumers in Vietnam. The recently launched iPhone 13 lineup, featuring new colors and significant hardware upgrades, has garnered a great deal of attention from enthusiasts.', 'iPhone13-Midnight.jpg', 10, '2019-05-18 16:30:00'),
('iPhone 13 Pink 256GB',5, 1, 11, 4, 556.12, 'With relentless advancements for their smartphones, Apple is a brand that consistently earns the trust of consumers in Vietnam. The recently launched iPhone 13 lineup, featuring new colors and significant hardware upgrades, has garnered a great deal of attention from enthusiasts.', 'iPhone13-Pink.jpg', 10, '2019-05-18 16:30:00'),
('iPhone 13 Blue 256GB',5, 1, 9, 4, 556.12, 'With relentless advancements for their smartphones, Apple is a brand that consistently earns the trust of consumers in Vietnam. The recently launched iPhone 13 lineup, featuring new colors and significant hardware upgrades, has garnered a great deal of attention from enthusiasts.', 'iPhone13-Blue.jpg', 10, '2019-05-18 16:30:00'),
('iPhone 13 Green 256GB',5, 1, 12, 4, 556.12, 'With relentless advancements for their smartphones, Apple is a brand that consistently earns the trust of consumers in Vietnam. The recently launched iPhone 13 lineup, featuring new colors and significant hardware upgrades, has garnered a great deal of attention from enthusiasts.', 'iPhone13-Green.jpg', 10, '2019-05-18 16:30:00'),
('iPhone 14 256GB 6.1-inch Yellow',6, 1, 7, 4, 871.41, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14-Yellow.jpg', 20, '2020-09-03 11:45:00'),
('iPhone 14 256GB 6.1-inch Midnight',6, 1, 1, 4, 871.41, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14-Midnight.jpg', 20, '2020-09-03 11:45:00'),
('iPhone 14 256GB 6.1-inch Blue',6, 1, 9, 4, 871.41, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14-Blue.jpg', 20, '2020-09-03 11:45:00'),
('iPhone 14 256GB 6.1-inch Purple',6, 1, 10, 4, 871.41, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14-Purple.jpg', 20, '2020-09-03 11:45:00'),
('iPhone 14 256GB 6.1-inch Starlight',6, 1, 2, 4, 871.41, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14-Starlight.jpg', 20, '2020-09-03 11:45:00'),
('iPhone 14 Plus 512GB 6.7-inch Yellow',6, 1, 7, 5, 881.29, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14Plus-Yellow.jpg', 5, '2020-09-03 11:45:00'),
('iPhone 14 Plus 512GB 6.7-inch Blue',6, 1, 9, 5, 881.29, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14Plus-Blue.jpg', 5, '2020-09-03 11:45:00'),
('iPhone 14 Plus 512GB 6.7-inch Purple',6, 1, 10, 5, 881.29, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14Plus-Purple.jpg', 5, '2020-09-03 11:45:00'),
('iPhone 14 Plus 512GB 6.7-inch Midnight',6, 1, 1, 5, 881.29, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14Plus-Midnight.jpg', 5, '2020-09-03 11:45:00'),
('iPhone 14 Plus 512GB 6.7-inch Starlight',6, 1, 2, 5, 881.29, 'The iPhone 14 and iPhone 14 Plus boast impressive battery life, powerful dual-camera systems for capturing photos and videos, and breakthrough safety features, including Emergency SOS and Collision Detection.', 'iPhone14Plus-Starlight.jpg', 5, '2020-09-03 11:45:00'),

('iPhone 15 256GB 6.1-inch Black', 10, 1, 13, 4, 881.29, 'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.', 'iPhone15-Black.jpg', 10, '2024-03-01 09:00:00'),
('iPhone 15 256GB 6.1-inch Green', 10, 1, 12, 4, 881.29, 'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.', 'iPhone15-Green.jpg', 10, '2024-03-01 09:00:00'),
('iPhone 15 256GB 6.1-inch Yellow', 10, 1, 7, 4, 881.29, 'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.', 'iPhone15-Yellow.jpg', 10, '2024-03-01 09:00:00'),
('iPhone 15 256GB 6.1-inch Pink', 10, 1, 11, 4, 881.29, 'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.', 'iPhone15-Pink.jpg', 10, '2024-03-01 09:00:00'),
('iPhone 15 256GB 6.1-inch Blue', 10, 1, 9, 4, 881.29, 'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.', 'iPhone15-Blue.jpg', 10, '2024-03-01 09:00:00'),
('HomePod White',10, 8, 14, null, 293.68, 'HomePod is a powerhouse of a speaker. Apple‑engineered audio technology and advanced software deliver high‑fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or wherever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound incredible.', 'HomePod-White.png', 5, '2023-09-24 17:10:00'),
('HomePod Black',10, 8, 13, null, 293.68, 'HomePod is a powerhouse of a speaker. Apple‑engineered audio technology and advanced software deliver high‑fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or wherever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound incredible.', 'HomePod-Black.png', 5, '2023-09-24 17:10:00'),
('HomePodMini Black',10, 8, 13, null, 95.67, 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. At just 84.3 mm tall, it takes up almost no space but fills the entire room with rich 360‑degree audio that sounds amazing from every angle. Add more than one HomePod mini for truly expansive sound.', 'HomePodMini-Black.png', 5, '2023-09-24 17:10:00'),
('HomePodMini White',10, 8, 14, null, 95.67, 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. At just 84.3 mm tall, it takes up almost no space but fills the entire room with rich 360‑degree audio that sounds amazing from every angle. Add more than one HomePod mini for truly expansive sound.', 'HomePodMini-White.png', 5, '2023-09-24 17:10:00'),
('HomePodMini Blue',10, 8, 9, null, 95.67, 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. At just 84.3 mm tall, it takes up almost no space but fills the entire room with rich 360‑degree audio that sounds amazing from every angle. Add more than one HomePod mini for truly expansive sound.', 'HomePodMini-Blue.png', 5, '2023-09-24 17:10:00'),
('Apple TV 4K Wi-Fi with 64GB¹ storage',10, 8, null, null, 133.99, 'Apple TV 4K unites your favorite Apple services with all your streaming apps in our best-ever picture and sound quality — thanks to the blazing‑fast A15 Bionic chip. Enjoy a new FaceTime experience on TV1 that brings your friends and family into your living room — and onto the biggest screen in your home. And with seamless interaction with all your devices and smart home accessories,2 it’s everything you love about Apple — at its cinematic best.', 'AppleTV4K.jpg', 5, '2023-09-24 17:10:00'),
('Apple TV 4K Wi-Fi + Ethernet with 128GB¹ storage',10, 8, null, null, 153.15, 'Apple TV 4K unites your favorite Apple services with all your streaming apps in our best-ever picture and sound quality — thanks to the blazing‑fast A15 Bionic chip. Enjoy a new FaceTime experience on TV1 that brings your friends and family into your living room — and onto the biggest screen in your home. And with seamless interaction with all your devices and smart home accessories,2 it’s everything you love about Apple — at its cinematic best.', 'AppleTV4K.jpg', 5, '2023-09-24 17:10:00')

INSERT INTO products (name, quantity_instock, category_id, color_id, capacity_id, price, [desc], image, sale_percent, create_date) VALUES 
('OtterBox Lumen Series Case for iPhone 15', 50, 9, null, null, 60.57, 'Welcome the Year of the Dragon with the Otterbox Lumen Series case for MagSafe specially made for the Lunar New Year. With illustration design from artist Yulong Lli, this auspicious version of the Apple iPhone case will bring the brave characteristics of this zodiac animal to life through peony-shaped fireworks, swirls and many colors. brilliant.', 'OtterBoxLumenSeriesCase.jpg', 20, '2024-03-19 09:15:00'),
('Smart Folio for iPad Pro (4th generation)', 50, 9, 13, null, 88.85, 'Smart Folio for iPad Pro is thin and light, protecting both the front and back of the device. Smart Folio automatically wakes iPad when opened and puts it back to sleep when closed. The Smart Folio attaches magnetically and can be easily folded in a variety of ways to create a stand for reading, viewing, typing, or FaceTime calls.', 'SmartFolio.jpg', 15, '2024-03-19 09:30:00'),
('iPhone Lightning Dock', 30, 9, 8, null, 39.99, 'You can use it to charge and sync any iPhone that has a Lightning connector. Your iPhone sits upright in the dock as it syncs or charges, so it’s ideal for a desk or worktop. Even when your iPhone is in an Apple-designed case, it’s easy to dock. And you can unlock iPhone or use Touch ID without having to remove it from the dock.', 'LightningDock.jpeg', 10, '2024-03-19 09:45:00'),
('20W USB-C Power Adapter', 50, 9, null, null, 29.99, 'The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office or on the go. Pair it with iPhone 8 or later for fast charging — 50 percent battery in around 30 minutes.¹ Or pair it with the iPad Pro and iPad Air for optimal charging performance. Compatible with any USB-C enabled device.', 'PowerAdapter.jpg', 0, '2024-03-19 10:00:00'),
('Belkin Lightning Audio + Charge Rockstar', 100, 9, null, null, 59.50, 'The Belkin Lightning Audio + Charge RockStar offers dual functionality for charging and listening to your iPhone or iPad. Whether you want to charge in the car, on the go or at home, the adapter makes it possible to listen to Lightning Audio and power your iPhone, simultaneously.', 'ChargeRockstar.jpg', 0, '2024-03-19 10:15:00'),
('Lightning Digital AV Adapter', 50, 9, null, null, 76.40, 'Use the Lightning Digital AV Adapter with your iPhone, iPad or iPod with Lightning connector. The Lightning Digital AV Adapter supports mirroring of what is displayed on your device screen — including apps, presentations, websites, slideshows and more — to your HDMI-equipped TV, display, projector or other compatible display in up to 1080p HD.', 'LightningAdapter.jpg', 10, '2024-03-19 10:30:00'),
('Apple Pencil (USB-C)', 30, 9, null, null, 120.10, 'Apple Pencil (USB-C) is perfect for taking notes, sketching, marking up documents, journalling and more. It delivers pixel‑perfect precision, low latency and tilt sensitivity. So it’s as natural to use as a pencil.', 'ApplePencil.jpg', 0, '2024-03-19 10:45:00'),
('iPhone 15 Plus FineWoven Case with MagSafe', 50, 9, 13, null, 89.80, 'Designed by Apple to complement iPhone 15 Plus, the FineWoven Case with MagSafe is a delightful way to give your iPhone extra protection while adding style.', 'FineWovenCase.jpg', 15, '2024-03-19 11:00:00'),
('mophie Wireless Charging Vent Mount with MagSafe', 40, 9, null, null, 120.10, 'The mophie wireless charging vent mount holds your iPhone securely where you can see it while it charges. This Made for MagSafe wireless charger comes with an adjustable arm extension that lets you position your iPhone at the perfect viewing angle, and a USB-C 20W charger that delivers up to 15W at the fastest wireless charging speed.', 'WirelessCharging.jpg', 20, '2024-03-19 11:15:00'),
('mophie Dual USB-C 40W PD Car Charger', 100, 9, null, null, 55.50, 'The mophie Dual USB-C 40W PD Car Charger can charge two devices while you drive. The USB-C and USB-C PD ports deliver a shared output of up to 40W to your iPhone or iPad.* This compact charger turns your car’s 12V auxiliary port into a convenient power source for your portable devices.', 'CarCharger.jpg', 0, '2024-03-19 11:30:00'),
('Apple TV+', 50, 10, null, null, 50.00, 'New Apple Originals every month — always ad‑free. Stream on the Apple TV app on Apple devices, smart TVs, consoles or sticks. Watch in 4K HDR video with immersive Spatial Audio. Share a single subscription with up to five people.', 'AppleTV.png', 0, '2024-03-19 11:45:00'),
('Apple Music', 30, 10, null, null, 99.00, 'Select your favourite songs, albums, playlists and artists to add them to your library — and improve your personalised recommendations.3 And you’ll automatically be notified when artists you’ve added release new music.', 'AppleMusic.jpg', 10, '2024-03-19 12:00:00')

select * from products
select * from category 
INSERT INTO ratingproduct (user_id, product_id, content, rate_point)
VALUES
    (6, 1, 'The product is excellent!', 5),
    (7, 2, 'Im really satisfied with this product.', 4),
    (8, 3, 'This product is terrible. I do not recommend it.', 1),
    (9, 4, 'Great product! I love it.', 5),
    (10, 5, 'Not worth the price. Disappointed.', 2),
    (11, 6, 'The quality of this product is outstanding.', 5),
    (12, 7, 'Average product. Nothing special.', 3),
    (13, 8, 'This product is amazing! I cant live without it.', 5),
    (14, 9, 'The quality of this product is top-notch.', 5),
    (15, 10, 'Im disappointed with the performance of this product.', 2),
    (16, 11, 'Great value for the price. Highly recommended.', 4),
    (17, 12, 'This product exceeded my expectations.', 4),
    (18, 13, 'I regret purchasing this product. Not worth it.', 1),
    (19, 14, 'Outstanding customer service and product quality.', 5),
    (20, 15, 'Average product. Nothing special.', 3),
    (21, 16, 'Im very satisfied with my purchase.', 4),
    (22, 17, 'This product is a game-changer!', 5),
    (23, 18, 'I wouldnt recommend this product to others.', 2),
    (24, 19, 'The packaging of this product is impressive.', 3),
    (25, 20, 'Im in love with this product. Its perfect!', 5),
    (26, 21, 'Not as described. Disappointed with the product.', 2),
    (27, 22, 'Excellent product quality and fast shipping.', 5),
    (28, 23, 'This product is overpriced for its quality.', 2),
    (29, 24, 'Im amazed at the performance of this product.', 5),
    (30, 25, 'The product arrived damaged. Poor packaging.', 1),
    (31, 26, 'Decent product. It gets the job done.', 3),
    (32, 27, 'I wish I had bought this product sooner!', 5),
     (33, 28, 'Im extremely satisfied with this product!', 5),
    (34, 29, 'The product is of poor quality. Not recommended.', 1),
    (35, 30, 'This product is a great value for the price.', 4),
    (36, 31, 'Im disappointed with the customer service.', 2),
    (37, 32, 'The product arrived on time and in good condition.', 4),
    (38, 33, 'I have mixed feelings about this product.', 3),
    (39, 34, 'This product is a must-have. Highly recommended!', 5),
    (40, 35, 'The product doesnt meet my expectations.', 2),
    (41, 36, 'Im impressed with the functionality of this product.', 4),
    (42, 37, 'Not worth the price. I regret buying it.', 1),
    (43, 38, 'The product is exactly what I was looking for.', 5),
    (44, 39, 'I wouldnt recommend this product to others.', 2),
    (45, 40, 'This product is average. Its neither good nor bad.', 3),
    (46, 41, 'Im completely satisfied with this purchase.', 5),
    (47, 42, 'The product is overpriced for its quality.', 2),
    (48, 43, 'Excellent product! It exceeded my expectations.', 5),
    (49, 44, 'Im not happy with the performance of this product.', 2),
    (50, 45, 'This product is a game-changer in its industry!', 5),
    (6, 1, 'The product is excellent!', 5),
    (7, 2, 'Im really satisfied with this product.', 4),
    (8, 3, 'This product is terrible. I do not recommend it.', 1),
    (9, 4, 'Great product! I love it.', 5),
    (10, 5, 'Not worth the price. Disappointed.', 2),
    (11, 6, 'The quality of this product is outstanding.', 5),
    (12, 7, 'Average product. Nothing special.', 3),
    (13, 8, 'This product is amazing! I cant live without it.', 5),
    (14, 9, 'The quality of this product is top-notch.', 5),
    (15, 10, 'Im disappointed with the performance of this product.', 2),
    (16, 11, 'Great value for the price. Highly recommended.', 4),
    (17, 12, 'This product exceeded my expectations.', 4),
    (18, 13, 'I regret purchasing this product. Not worth it.', 1),
    (19, 14, 'Outstanding customer service and product quality.', 5),
    (20, 15, 'Average product. Nothing special.', 3),
    (21, 16, 'Im very satisfied with my purchase.', 4),
    (22, 17, 'This product is a game-changer!', 5),
    (23, 18, 'I wouldnt recommend this product to others.', 2),
    (24, 19, 'The packaging of this product is impressive.', 3),
    (25, 20, 'Im in love with this product. Its perfect!', 5),
    (26, 21, 'Not as described. Disappointed with the product.', 2),
    (27, 22, 'Excellent product quality and fast shipping.', 5),
    (28, 23, 'This product is overpriced for its quality.', 2),
    (29, 24, 'Im amazed at the performance of this product.', 5),
    (30, 25, 'The product arrived damaged. Poor packaging.', 1),
    (31, 26, 'Decent product. It gets the job done.', 3),
    (32, 27, 'I wish I had bought this product sooner!', 5);

