USE [master]

IF db_id('nashvilleBeer') IS NULL
  CREATE DATABASE [nashvilleBeer]
GO

USE [nashvilleBeer]
GO

DROP TABLE IF EXISTS [Comments];
DROP TABLE IF EXISTS [Beer];
DROP TABLE IF EXISTS [Brewery];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [UserType];
GO

CREATE TABLE [UserType] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(20) NOT NULL
)

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Username] nvarchar(40) NOT NULL,
  [Email] nvarchar(40) NOT NULL,
  [FirebaseUserId] nvarchar(28) NOT NULL,
  [UserTypeId] integer NOT NULL,

  CONSTRAINT [FK_User_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [Brewery] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Address] nvarchar(511) NOT NULL,
  [Website] nvarchar(511) NOT NULL,
  [ImageUrl] nvarchar(511) NOT NULL,
  [Established] nvarchar(25) NOT NULL
)
GO

CREATE TABLE [Beer] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Type] nvarchar(255) NOT NULL,
  [Abv] DECIMAL(2,1),
  [Ibu] int,
  [ImageUrl] nvarchar(511) NOT NULL,
  [BreweryId] int NOT NULL
)
GO

CREATE TABLE [Comments] (
  [Id] int PRIMARY KEY identity NOT NULL,
  [Comment] nvarchar(511) NOT NULL,
  [BeerId] int NOT NULL,
  [UserId] int NOT NULL
)
GO

ALTER TABLE [Comments] ADD FOREIGN KEY ([BeerId]) REFERENCES [Beer] ([Id])
GO

ALTER TABLE [Beer] ADD FOREIGN KEY ([BreweryId]) REFERENCES [Brewery] ([Id])
GO

ALTER TABLE [Comments] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO
