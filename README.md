# Exam Project by Georgi Zlatev

Project Title: Local Food Events

1. Introduction
The purpose of this project is show the skills and techniques learned in the course ReactJS by SoftUni in 2023. The websites serves as a place where the food-lovers community can explore a variety of restaurants in many different categories. For example there are restaurants for sushi, burgers, etc.

2. Getting Started
This repository works using ReactJS for the frontend, and the Softuni practice server for the backend.
In order to start the application you need the following requirements:
-> git clone https://github.com/georgi-zlatev/exam-react-dec-2023.git (Alternatively you can download the repository as ZIP file)
-> cd exam-react-dec-2023 (Load the directory of the project)
-> npm i (install NPM packages)
-> npm i react-router-dom react-bootstrap bootstrap (Installs all the required libraries)

! Important - before we continue, you need to clone the Softuni Practice server as well. You can find the repo used here: https://github.com/softuni-practice-server/softuni-practice-server

You need to download or clone the server:
-> git clone https://github.com/softuni-practice-server/softuni-practice-server (Alternatively you can download the repository as ZIP file)
-> cd softuni-practice-server (Load the directory of the project)

For now your folder structure should be like this:
C://your-directory/exam-react-dec-2023
C://your-directory/softuni-practice-server

After you have downloaded all the necessary resources, you need to start the application.

3. Start the App + the server

To start the app you need to run in the terminal:
npm run dev

To start the server you need to run in the terminal:
node server.js

!Important - to run the server you need to have node.js installed. You can download it from here: https://nodejs.org/en/download/current

4. Components

The app consists of a couple of pages and views.
All pages have main menu as header and text as footer and link to the github of the author.

**Homepage**
There is a home page, which serves as a landing page. 

![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/2229bc42-55b1-49d3-b5c7-84524971c8e3)

The home page a short description of the websites main idea and a link in the form of static card, which leads to the list of restaurants.

**Locations**

Here are listed all the locations. Each location contains image, restaurant type and name of the restaurant. The button "Details" is visible only to registered users.
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/625e91fe-08cf-44df-97c9-9c0d013ad40b)

This is the view of the non-owner/non-publisher of the restaurant - the user can write reviews, see other reviews and go back to the list with all locations:
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/a55202ff-81ba-4ce0-a928-cd5652f56aee)


This is the view of the owner/published of the restaurant - in adddition to the normal view, the owner can edit and delete a listing:


**Location detailed view**

The details page is visible only for registered users.

![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/fb77798e-5bb0-4c17-8fb0-70915bf14113)


**Create location**

The create location is visible only to authenticated users (logged-in users). There is a check if the image is URL. 
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/ea26e29c-ac0c-482b-a6b2-4a9e44c1de6f)

**Edit location**

The edit location view shows the data for the location in text fields, that may be edited. After the edits are ready - edit location button saves the edits. There is a check if the image is URL. 
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/faef70de-826b-48e2-8d42-65e8b7a7e0ef)


**Delete location**
Deletion is done after confirming a prompt:
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/2c3f2c69-1d4a-4f90-bf17-77483879ff85)

**Login**
There is a validation if the input is email. If you are not registered there is a refering link to the register page.
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/034ee4f9-1dbb-4410-800c-0c46c465bae3)

**Register**
There is a validation if the input is email. If you are already registered there is a refering link to the login page.
![image](https://github.com/georgi-zlatev/exam-react-dec-2023/assets/9295068/d8e41327-7532-4756-b8a9-877d9110c232)

**About page**
There is about page telling more about the project

5. Known issues

The data inserted (about locations, reviews and user registrations) is lost after the server is stopped.

6. Contributing to the project - in order to contribute to the project it may be done via pull requests.

This project is copyrighted and any redistribution or unauthorised copy is not allowed without any written permission.
