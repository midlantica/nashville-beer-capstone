USE [master]

IF db_id('nashvilleBeer') IS NULL
  CREATE DATABASE [nashvilleBeer]
GO

USE [nashvilleBeer]
GO

DROP TABLE IF EXISTS [users];
DROP TABLE IF EXISTS [brewery];
DROP TABLE IF EXISTS [beer];
DROP TABLE IF EXISTS [comments];
GO

CREATE TABLE "users" {
  "id" int [pk]
  "username" varchar [not null]
  "email" varchar(40)  [not null]
  "password" varchar(40)  [not null]
  "firebaseUserId" varchar  [not null]
  "isAdmin" bool [not null]
}

CREATE TABLE "brewery" (
  "id" int [pk]
  "title" varchar  [not null]
  "address" varchar  [not null]
  "image" varchar  [not null]
  "established" date [not null]
)

CREATE TABLE "beer" (
  "id" int [pk]
  "name" int [not null]
  "type" varchar [not null]
  "abv" double [not null]
  "ibu" varchar [not null]
  "image" varchar [not null]
  "breweryId" int [not null]
)

CREATE TABLE "comments" (
  "id" int [pk]
  "comment" varchar [not null]
  "beerId" int [not null]
  "userId" int [not null]
)


ALTER TABLE [comments] ADD FOREIGN KEY ([beerId]) REFERENCES [beer] ([id])
GO

ALTER TABLE [beer] ADD FOREIGN KEY ([breweryId]) REFERENCES [brewery] ([id])
GO

ALTER TABLE [comments] ADD FOREIGN KEY ([userId]) REFERENCES [users] ([id])
GO