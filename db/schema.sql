
DROP TABLE table_name CASCADE;
DROP TABLE IF EXISTS table_name CASCADE;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);
