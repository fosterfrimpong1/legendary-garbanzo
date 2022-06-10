/*Introduction to SQL*/
SELECT * FROM celebs;


/*Statements*/
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);

/*Create*/
CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
);

/*Insert*/
INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 22);

INSERT INTO celebs (id, name, age) 
VALUES (2, 'Beyonce Knowles', 33); 
 
INSERT INTO celebs (id, name, age) 
VALUES (3, 'Jeremy Lin', 26); 
 
INSERT INTO celebs (id, name, age) 
VALUES (4, 'Taylor Swift', 26); 

/*Select*/
SELECT * FROM celebs;
SELECT name FROM celebs;


/*Alter*/
ALTER TABLE celebs 
ADD COLUMN twitter_handle TEXT; 
 
SELECT * FROM celebs;

/*Update*/
UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4; 

/*Delete*/
DELETE FROM celebs 
WHERE twitter_handle IS NULL;
 
SELECT * FROM celebs; 


/*Constraints*/
