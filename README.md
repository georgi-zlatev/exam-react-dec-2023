## Documentation


Project Title: Local Food Events

The purpose of this project is show the skills and techniques learned in the course ReactJS by SoftUni in 2023. The websites serves as a place where the food-lovers community can explore a variety of restaurants in many different categories. For example there are restaurants for sushi, burgers, etc.

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]
- Install react-router-dom react-bootstrap bootstrap from npm
- clone the Softuni Practice server as well. You can find the repo used here: https://github.com/softuni-practice-server/softuni-practice-server
- clone the project from here

### Setting Up a Project

This repository works using ReactJS for the frontend, and the Softuni practice server for the backend.

Your folder structure should be like this:
C://your-directory/exam-react-dec-2023
C://your-directory/softuni-practice-server

After you have downloaded all the necessary resources, you need to start the application.

Run the application:
```
cd exam-react-dec-2023
npm run dev
```

Run the server:

```
cd softuni-practice-server
node server.js
```

### Components

The app consists of a couple of pages and views.

**Homepage**
**Locations**

Each location contains image, restaurant type and name of the restaurant. The button "Details" is visible only to registered users.

A registered and logged in user can write reviews, see other reviews and go back to the list with all locations

The owner can edit and delete a listing:


**Location detailed view**

The details page is visible only for registered users.

**Create location**

The create location is visible only to authenticated users (logged-in users). There is a input validation if the image is URL. 


**Edit location**

**Delete location**

**Login**
There is a validation if the input is email. If you are not registered there is a refering link to the register page.

**Register**
There is a validation if the input is email. If you are already registered there is a refering link to the login page.

**About page**

### Known issues

The data inserted (about locations, reviews and user registrations) is lost after the server is stopped.

### Contributing to the project - in order to contribute to the project it may be done via pull requests.

This project is copyrighted and any redistribution or unauthorised copy is not allowed without any written permission.
