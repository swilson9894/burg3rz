CREATE DATABASE fatburger_db;
USE fatburger_db;

CREATE TABLE fatburger_db
(
    id INIT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
)