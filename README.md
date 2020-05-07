# ezq-web
EZQ allows people to wait in a virtual queue without actually being in line.

## Running the Application
### To run the client:
```
cd ./client
npm start
```
### To run the server:
```
cd ./server
npm run start
```
## Database Setup
- create a .env file in ./server 
- create and add MySQL database info by following .env_sample
- create the following tables:
```
CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 createdAt DATE,
 updatedAt DATE,
 email varchar(50) unique,
 username varchar(32) unique,
 fullname varchar(50),
 password varchar(150)
);

CREATE TABLE queues (
 id INT AUTO_INCREMENT PRIMARY KEY,
 createdAt DATE,
 updatedAt DATE,
 userID INT,
 username varchar(32),
 name varchar(50),
 description varchar(255),
 location varchar(150)
);

CREATE TABLE active (
 id int PRIMARY KEY,
 startedAt TIME
);

CREATE TABLE inactive (
 id int PRIMARY KEY,
 startedAt TIME,
 endAt TIME
);

CREATE TABLE occupants (
 queueID int,
 username varchar(32),
 joinedAt TIME
);

CREATE TABLE pastOccupants (
 queueID int,
 username varchar(32),
 joinedAt TIME,
 leftAt TIME
);

CREATE TABLE followed (
 username varchar(32),
 follower varchar(32)
);
```
