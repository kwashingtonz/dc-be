INSERT INTO `dc_db`.`gender_categories` (`id`, `name`) VALUES ('1', 'MEN');
INSERT INTO `dc_db`.`gender_categories` (`id`, `name`) VALUES ('2', 'WOMEN');
INSERT INTO `dc_db`.`gender_categories` (`id`, `name`) VALUES ('3', 'KIDS');

INSERT INTO `dc_db`.`types` (`id`, `name`) VALUES ('1', 'Tshirt');
INSERT INTO `dc_db`.`types` (`id`, `name`) VALUES ('2', 'Pants');
INSERT INTO `dc_db`.`types` (`id`, `name`) VALUES ('3', 'Shorts');

INSERT INTO `dc_db`.`products` (`id`, `title`, `description`, `price`, `isTrending`, `typeId`, `genderId`) VALUES ('1', 'Bear Appeal - Brown Men’s Oversized TShirt', 'Brown Oversized Crew Neck TShirt with premiuim cotton', '1090', '1', '1', '1');
INSERT INTO `dc_db`.`products` (`id`, `title`, `description`, `price`, `isTrending`, `typeId`, `genderId`) VALUES ('2', 'Bear Appeal - Navy Blue Casual Pants', 'Navy blue casual pants makes you comfortable in casual dress code', '1500', '1', '2', '2');
INSERT INTO `dc_db`.`products` (`id`, `title`, `description`, `price`, `isTrending`, `typeId`, `genderId`) VALUES ('3', 'Bear Appeal - Salmon Crew Short Sleeve Neck TShirtBear Appeal - Salmon Crew Short Sleeve Neck TShirt', 'Salmon coloured short sleeve premmium cotton crew neck makes you comfy on hot days', '990', '0', '1', '1');
INSERT INTO `dc_db`.`products` (`id`, `title`, `description`, `price`, `isTrending`, `typeId`, `genderId`) VALUES ('4', 'Bear Appeal - Black Women’s Crop top', 'Black Crop Top with best premium cotton', '990', '1', '1', '2');

INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/Gtz4jMzX/temp-Image-VSIyv-W.avif', '4');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/50VjWcRP/temp-Image0-Dk-Duj.avif', '4');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/xCBQVL89/temp-Imagea5-Gi-BW.avif', '1');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/c4yWD7Pm/temp-Image-JCUSWj.avif', '1');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/4yvS2chL/temp-Image-BDxldj.avif', '2');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/t44MDYRk/temp-Image0w-DHt-X.avif', '2');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/3RNrTKZF/temp-Image-Jfr3-YT.avif', '3');
INSERT INTO `dc_db`.`images` (`url`, `productId`) VALUES ('https://i.postimg.cc/J0B1sPvy/temp-Image-Soip31.avif', '3');

INSERT INTO `dc_db`.`users` (`username`, `password`) VALUES ('abc', '123');

INSERT INTO `dc_db`.`hero_image` (`url`) VALUES ('https://i.postimg.cc/13H30ZqZ/temp-Imagep-Lv4-VY.avif');
