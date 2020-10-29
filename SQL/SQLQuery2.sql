SELECT br.id, br.BreweryId, br.Name, br.Type, br.Abv, br.Ibu, br.ImageUrl
FROM Beer br 
LEFT JOIN Brewery b ON br.BreweryId = b.Id
WHERE b.Id = 1
;






SELECT b.id, b.Title, br.Name AS beerName 
FROM Brewery b 
LEFT JOIN Beer br ON br.BreweryId = b.Id
WHERE b.Id = 1
;


--SELECT id, Title, Address, Website, ImageUrl, Established FROM Brewery;

