SELECT bry.Id, bry.Title, bry.Address, bry.Website, bry.ImageUrl, bry.Established, 
br.id, br.BreweryId, br.[Name], br.Type, br.Abv, br.Ibu, br.ImageUrl
FROM Brewery bry
LEFT JOIN Beer br ON br.BreweryId = bry.Id;




SELECT br.id, br.BreweryId, br.[Name], br.Type, br.Abv, br.Ibu, br.ImageUrl
FROM Beer br 
LEFT JOIN Brewery b ON br.BreweryId = b.Id
WHERE b.Id = 1
;


INSERT INTO Brewery (Title, Address, Website, ImageUrl, Established) 
OUTPUT INSERTED.ID
VALUES ( @title, @address, @website, @imageurl, @established );




SELECT b.id, b.Title, br.Name AS beerName 
FROM Brewery b 
LEFT JOIN Beer br ON br.BreweryId = b.Id
WHERE b.Id = 1
;


--SELECT id, Title, Address, Website, ImageUrl, Established FROM Brewery;

