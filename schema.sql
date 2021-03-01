CREATE DATABASE scores;

USE scores;

CREATE TABLE testimonials (
  id int NOT NULL AUTO_INCREMENT,
  post varchar(255),
  author varchar(30),
  dog_owner tinyint default 0,
  parent tinyint default 0,
  commuter tinyint default 0,
  home_city varchar(30),
  created_at bigint(8),
  likes int default 0,
  PRIMARY KEY(id)
);

CREATE TABLE city_scores (
  id INT AUTO_INCREMENT,
  score int,
  criteria varchar(60),
  city_name varchar(40),
  PRIMARY KEY(id)
);