USE [nashvilleBeer];
GO

set identity_insert [UserType] on
insert into [UserType] ([ID], [Name]) VALUES (1, 'Admin'), (2, 'Drinker');
set identity_insert [UserType] off

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (1, 'admin', 'admin@gmail.com', 'N5zAybIN1ySAzJm6EMfpXDFbu7q2', 1);
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (2, 'fred', 'fred@gmail.com', '7y9HapP31MS0y0NTrRrE9lhPVHD2', 1);
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (3, 'susan', 'susan@gmail.com', 'H43zzqBklHeVOSZMw8IgDxvacRn1', 2);
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (4, 'tom', 'tom@gmail.com', 'fCYBH2imlESZFYIOJa4arMgIar62', 2);
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (5, 'mary', 'mary@gmail.com', '2PrEh2MxlqdS2v2VC1LRRjHKFbw2', 2);
INSERT INTO UserProfile (Id, 
Username, Email, FirebaseUserId, UserTypeId) VALUES (6, 'erik', 'erik@gmail.com', 'Oduxh2KM3fRJ7WUMf2ghHgQvxll1', 2);
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Brewery] ON
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (1,'Bearded Iris Brewing','101 Van Buren St., Nashville, Tennessee 37208 US','https://beardedirisbrewing.com/', 'https://www.pngkit.com/png/full/336-3361660_bearded-iris-2018-approved-logo-bearded-iris-brewing.png',2016);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (2,'Blackstone','2312 Clifton Ave, Nashville TN 37209','https://blackstonebeer.com/','https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/08/25140533/2016_Blackstone_crest_twocolor_logo_final.jpg',1994);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (3,'Czann’s','505 Lea Ave, Nashville, Tennessee 37203 US','http://www.czanns.com/','https://lh3.googleusercontent.com/proxy/Iz3R4RDH8v6HFRWBEgJkZGauZMLFaCDr9HbWfKT4XHgiEdptuNIBcV_A7csKxpVcLatZXPWHxZhiDuUixSlqYTl1jqRBVqr0YO9SwTaUqTqM3c2gQOCuOa2CPD0NThvltUkT',2011);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (4,'East Nashville Beer Works','320 E. Trinity Lane, Nashville, TN 37207','http://eastnashbeerworks.com/','https://eastnashbeerworks.com/assets/images/home/logo2.png',2020);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (5,'Fat Bottom','800 44th Ave N, Nashville, Tennessee 37209 US','http://www.fatbottombrewing.com/','https://cdn.shopify.com/s/files/1/0149/1405/files/fblogo_180x.png?v=1586956008',2012);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (6,'Hap & Harry''s','411 Great Circle Rd, Nashville, Tennessee 37228 US','http://www.hapandharrys.com/','https://hapandharrys.com/wp-content/uploads/2020/03/Hap-and-Harrys-Tennessee-Beer-Logo-1.png',2012);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (7,'Jackalope','701 8th Avenue South, Nashville, Tennessee 37203 US','http://www.jackalopebrew.com/','https://untappd.akamaized.net/site/brewery_logos_hd/brewery-12023_ae864_hd.jpeg',2011);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (8,'Little Harpeth','30 Oldham St, Nashville, Tennessee 37213 US','https://littleharpethbrewing.com/','https://cdn.shopify.com/s/files/1/1582/9245/t/2/assets/logo.png?v=7255090471012412531',2015);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (9,'New Heights','928 5th Ave S., Nashville, Tennessee 37203 US','https://www.newheightsbrewing.com/home','https://static.wixstatic.com/media/e6bad6_c3832cd04dfd4effbae0525dcd8ed3a7~mv2.png/v1/fill/w_326,h_400,al_c,q_85,usm_0.66_1.00_0.01/nh_shirt_black_est_2016%20-%20this%20is%20the%20mo.webp',2016);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (10,'Smith & Lentz','903 Main St., Nashville, TN 37206','https://www.smithandlentz.com/','https://images.squarespace-cdn.com/content/v1/5314c70ce4b000ec7f852881/1594323856814-B5W9NLCBY3DHOQO5UNCY/ke17ZwdGBToddI8pDm48kARSIqQgJLndfnvDAREsZkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpypok3KpnFoVVLhDNbbrcRyg-c81Tr_bMneUWnnc6AZWDrAMRbK7hDByj4ECtc6kZ0/Logo-Brewery-East+Nashville?format=1500w',2015);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (11,'Tennessee Brew Works','809 Ewing Ave, Nashville, Tennessee 37203 US','http://www.tnbrew.com/','https://images.squarespace-cdn.com/content/58673aa9d1758e37151d6a60/1494613058557-ACQT2IH00V7GJRHHTY9S/TNBW-logo.png?content-type=image%2Fpng',2013);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (12,'The Black Abbey','2952 Sidco Dr, Nashville, TN 37204','https://blackabbeybrewing.com','https://blackabbeybrewing.com/wp-content/uploads/2018/11/blackabbey-logoLIGHT2.png',2008);
INSERT INTO Brewery(Id,[Title],[Address],[Website],ImageUrl,Established) VALUES (13,'Yazoo','900 River Bluff Drive, Madison, Tennessee 37115 US','http://www.yazoobrew.com/','https://yazoobrew.com/wp-content/uploads/2019/01/yz-script.png',2003);
SET IDENTITY_INSERT [Brewery] OFF

--SET IDENTITY_INSERT [Beer] ON
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Homestyle',1,'IPA',6,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/homestyle-1.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-1.2.1&q=80&w=736&wpsize=large');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Attention Please',1,'Double IPA',8.2,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/attention-please.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Comet Trails',1,'Double IPA',8,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/comet-trails-scaled.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Spare Change',1,'Double IPA',8.5,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/spare-change-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-1.2.1&q=80&w=1024&wpsize=large');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('V. Latte: Blue Heron',1,'Imperial Oatmeal Stout',9,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/v-latte-blue-heron-scaled.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Pep Talk',1,'Pilsner',4.2,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/peptalk-1.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Chief Of Chiefs DDH',1,'Double IPA',7.5,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/DDH_CHIEF_OF_CHIEFS_2.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Double Homestyle',1,'Double IPA',8.2,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/DOUBLE-HOMESTYLE.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&rect=457%2C0%2C1280%2C1280&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Tunnel Vision DDH w/ Citra',1,'IPA',6.8,NULL,'https://craftpeak-cooler-images.imgix.net/bearded-iris-brewing/tunnel-vision-ddh-w-citra.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-1.2.1&q=80&w=600&wpsize=tile_strict');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('HopJack',2,'American Pale Ale',6.3,60,'https://untappd.akamaized.net/site/beer_logos_hd/beer-267851_63909_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('St Charles Porter',2,'American Porter',5.8,34,'https://untappd.akamaized.net/site/beer_logos_hd/beer-26241_8aa5a_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Nut Brown Ale',2,'Brown Ale',5.6,23,'https://untappd.akamaized.net/site/beer_logos_hd/beer-814_b26b5_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Adam Bomb',2,'American IPA',7.2,76,'https://d2sochvv0rudri.cloudfront.net/beer_labels/30571/blackstone-adam-bomb-ipa.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Chocoloate Milk Stout',2,'Stout',6.9,27,'https://untappd.akamaized.net/site/beer_logos_hd/beer-262986_d9e98_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Session Player',2,'IPA',4.9,35,'https://untappd.akamaized.net/site/beer_logos_hd/beer-1044537_09e51_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Czann’s German Pilnser',3,'Pilsner',5.5,NULL,'http://www.czanns.com/wp-content/uploads/2016/02/Seasonal-Tap-forCzannsdotcom.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Czann’s Dunkelweizen',3,'Dunkelweisen',5.25,20,'http://www.czanns.com/wp-content/uploads/2016/02/dunktap.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Czann’s Pale Ale',3,'Pale Ale',5,38,'http://www.czanns.com/wp-content/uploads/2013/12/Pale-Tap-700x394.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Czann’s Blonde',3,'Blonde Ale',4.25,18,'http://www.czanns.com/wp-content/uploads/2013/12/Blonde-Tap-700x394.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Czann’s IPA',3,'IPA',6.2,53,'http://www.czanns.com/wp-content/uploads/2013/12/IPA-Tap-700x394.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Miro Miel',4,'Blonde Ale',5.2,15,'https://untappd.akamaized.net/photos/2020_10_22/9b8e426b9290b6e196a2e3c8b03a40e1_raw.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Woodland Street Session',4,'IPA',4.6,62,'https://untappd.akamaized.net/photos/2020_10_05/2a7782825bd805a9f6b920aa80c132bf_raw.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Cumberland Punch',4,'Wheat Beer',6.2,26,'https://untappd.akamaized.net/photos/2020_08_30/38b1ff30c911b54079483315d68e2967_1280x1280.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('East Bank Citra IPA',4,'IPA',7,74,'https://untappd.akamaized.net/photos/2020_10_22/72a31dc17739ac6466b09ab1f7d4c83b_1280x1280.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('W.A.C.',5,'American Pale Ale',5.6,31,'https://fatbottombrewing.com/wp-content/uploads/2016/09/WAC.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Ruby',5,'American Red Ale',5.1,35,'https://fatbottombrewing.com/wp-content/uploads/2016/08/ruby.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Knockout',5,'IPA',5.9,80,'https://fatbottombrewing.com/wp-content/uploads/2016/08/knockout.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('IDA',5,'Golden Ale',6.2,25,'https://fatbottombrewing.com/wp-content/uploads/2016/08/ida-1.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hap & Harry''s Tennessee Lager',6,'Lager',4.9,14,'https://lh3.googleusercontent.com/proxy/13qMWw_yKjUx9U_NYfchMj2VT1Kz0ZVDSv-ypKahG1bZVXBmaGOItDNpM32Ljclrl8gs44zSzSoZJQvynTK_XHl_gWaWW05ZsGTK2j2UBuFTk4XfrmpsHjVK-p27OyDhtCIyljk5SngTP7CTjQYtf7Dwlmt-qJ5n');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hap And Harry''s Nash IPA',6,'IPA',5,NULL,'http://rslipman.com/wp-content/uploads/2017/01/Hap_n_Harrys_Nash-IPA_12oz-Can_HH0323_0519-2.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hap & Harry''s Tennessee Ale',6,'Ale',5.1,22,'http://rslipman.com/wp-content/uploads/2017/01/Hap_n_Harrys_Tennessee-Ale_12oz-Can_HH0169_0719-1.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Thunder Ann',7,'American Pale Ale',5.5,37,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fjackalopebrew.com%2Fthunder-ann%2F&psig=AOvVaw3vsIlgGDoVHr6tqbrhbF9K&ust=1603751842897000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiDr7Dn0OwCFQAAAAAdAAAAABAE');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Fennario',7,'IPA',7.2,74,'https://products0.imgix.drizly.com/ci-jackalope-fennario-ipa-8a32541a9f0d17d8.jpeg?auto=format%2Ccompress&fm=jpg&q=20');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Bearwalker',7,'Maple Brown Ale',5,32,'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2019/04/bwcan.png?resize=320%2C582&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Sarka',7,'Pilsner',4.8,30,'https://products3.imgix.drizly.com/ci-jackalope-sarka-pilsner-a088054d523580a4.png?auto=format%2Ccompress&fm=jpg&q=20');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Snowman Stout',7,'Mocha Stout',6.2,28,'https://untappd.akamaized.net/site/beer_logos_hd/beer-108091_a5a1f_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Lovebird',7,'Strawberry Raspberry Wheat',4.4,12,'https://products0.imgix.drizly.com/ci-jackalope-love-bird-d47b902704ae5170.png?auto=format%2Ccompress&fm=jpg&q=20');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Chicken Scratch',8,'American Pilsner',5.7,38,'https://icdn.bottlenose.wine/images/full/533002.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Mosaic',8,'India Pale Kolsch',5.8,46,'https://icdn.bottlenose.wine/images/full/546666.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Upstream',8,'Amber Lager',5.6,31,'https://icdn.bottlenose.wine/images/full/531862.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Nothing Fancy',9,'Cream Ale',5.6,21,'https://sage.blob.core.windows.net/media/5ef0c2ac3269ae8a3079a858_00856335007036-glamor-frontpackageglamor-2020-06-04t14-29-58-pixel-3a-quality-90-1-21-1-user-5984ad42a967f880524de2c4-2uqj-384221.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Coffee & Cream',9,'Cream Ale',5.6,21,'https://untappd.akamaized.net/photos/2020_07_08/01505876ad965954a1cc99cd24db0cc1_640x640.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Mr. Crantastic',9,'Sour',4.9,10,'https://untappd.akamaized.net/site/beer_logos_hd/beer-3607920_948b1_hd.jpeg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('New Heights IPA',9,'American IPA',6.9,101,'https://icdn.bottlenose.wine/images/full/515563.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Mosaic',10,'IPA',6.8,NULL,'https://images.ctfassets.net/sz2xpiwl6od9/lTtLZgO8Y3EYJ2LZP6cHy/d72d4d6c2971596cf89eda880afe66e3/Smith_and_Lentz_Crowler-5073.jpg?w=900');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('German Pils',10,'Pilsner',4.8,NULL,'https://untappd.akamaized.net/photos/2020_07_19/c9391509eaa010d26feb118e8a266094_1280x1280.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('El Cuarto',10,'American IPA',6.2,70,'https://untappd.akamaized.net/photos/2018_10_19/54fd209ff07a573b17f1716972d46a8c_1280x1280.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Southern WIt',11,'Witbier',5.1,15,'https://images.squarespace-cdn.com/content/v1/58673aa9d1758e37151d6a60/1580088129987-26JYQZHDW1FRQII6E312/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Southern+Wit?format=1000w');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('State Park',11,'American Blonde Ale',4.5,20,'https://images.squarespace-cdn.com/content/v1/58673aa9d1758e37151d6a60/1580008337272-1N1FPNZJTSI048YDZFAC/ke17ZwdGBToddI8pDm48kMioUCkzhhoGEPqzXNldlR17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbWUIxbBvGLYn55SlQiIfImo0THu_UreuZ16sqI8_iWZG6v6ULRah83RgHXAWD5lbQ/State+Park+Blonde+6-pack?format=500w');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hippies & Cowboys',11,'IPA',6,35,'https://images.squarespace-cdn.com/content/v1/58673aa9d1758e37151d6a60/1579662396731-469WABB5I4ZZUKSY1Q8S/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Hippies+%26+Cowboys?format=1000w');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('1927 APA',11,'IPA',7.5,70,'https://images.squarespace-cdn.com/content/v1/58673aa9d1758e37151d6a60/1592279666599-280ZRSFA0RM5VYTVST6M/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/1927+IPA?format=1000w');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('The Rose',12,'Belgian Blonde Ale',5.4,15,'https://blackabbeybrewing.com/wp-content/uploads/2018/10/rosecan.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('The Forty Four',12,'Coffee Porter',4.8,25,'https://cdn.nashvillepost.com/files/base/scomm/nvp/image/2016/09/640w/44_Porter.57e3f1b92345a.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('The Five Points',12,'India Pale Ale',5.6,94,'https://blackabbeybrewing.com/wp-content/uploads/2020/03/5pts-320x320.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('The Special',12,'Abbey Ale',7.4,13,'https://blackabbeybrewing.com/wp-content/uploads/2019/01/spec3-320x320.png');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('TNIPA',12,'Dry-Hopped India Pale Ale',5,30,'https://untappd.akamaized.net/photos/2020_10_09/095ad347a4ccdafaa788ddf7093fbe26_1280x1280.jpg');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Yazoo Pale Ale',13,'Pale Ale',5.8,47,'https://i0.wp.com/yazoobrew.com/wp-content/uploads/2019/01/pale6.jpg?fit=1165%2C500&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Dos Perros',13,'Brown Ale',4.9,16,'https://i0.wp.com/yazoobrew.com/wp-content/uploads/2019/01/dosperros6.jpg?resize=1024%2C902&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hefeweisen',13,'Hefeweizen',5,18,'https://i2.wp.com/yazoobrew.com/wp-content/uploads/2019/01/Hefe6.jpg?fit=1165%2C500&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Sly Rye Porter',13,'American Porter',5.7,20,'https://i0.wp.com/yazoobrew.com/wp-content/uploads/2019/01/slyrye6.jpg?resize=961%2C1024&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Hop Pefect IPA',13,'American IPA',5.7,91,'https://i1.wp.com/yazoobrew.com/wp-content/uploads/2019/01/perfect6.jpg?resize=1024%2C917&ssl=1');
INSERT INTO Beer([Name],BreweryId,[Type],Abv,Ibu,ImageUrl) VALUES ('Gerst',13,'Red Ale',5,11,'https://i0.wp.com/yazoobrew.com/wp-content/uploads/2019/01/gerst6.jpg?resize=1024%2C988&ssl=1');
--SET IDENTITY_INSERT [Beer] OFF

SET IDENTITY_INSERT [Comments] ON
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (1, 'Curabitur blandit tempus porttitor.', 1, 1);
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (2, 'Nulla vitae elit libero, a pharetra augue..', 1, 2);
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (3, 'Donec ullamcorper nulla non metus auctor fringilla.', 1, 3);
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (4, 'Maecenas sed diam eget risus varius blandit sit amet non magna.', 1, 1);
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (5, 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.', 1, 5);
INSERT INTO Comments (Id, Comment, BeerId, UserId) VALUES (6, 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 1, 1);
SET IDENTITY_INSERT [Comments] off

