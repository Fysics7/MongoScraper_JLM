# MongoScraper_JLM
Mongo Scraper Application homework due September 15 / Week 18

### Overview
This assignment, I was tasked with creating a news website scraper that allows visitors to leave comments on the latest articles.  These notes would then be saved to the database via MongoDB and notes and saved articles could be deleted.

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- MongoDB
- Mongoose
- npm packages
    - body-parser
    - express
    - mongoose
    - cheerio
    - request
    - morgan
    - axios

## Installation Instructions
1. Fork the github repo and then clone the forked repo to your computer.  Node.js is required to be installed on your system.
2. At the command line navigate to the apps folder and run `npm install`, this will install all the necessary npm dependencies from the package.json file.
3. Install MongoDB on your machine.  Open `terminal` and enter the following command `mongod`.  
4. Next, go to the server.js file, right-click and select `Open in Terminal` (this is if you have Visual Studio and GitBash installed).
5. On the command line, type: `mongo`.
6. Repeat step 4
7. On the command line, type: `node server.js` - this will console the port number the app will be on - currently set for 3000
8. Go to your browser and type: `http://localhost:3000/ into address bar to pull up the application.

## Known Issues and TODO items
Articles were not initially pulling up and visible.  
Will return to this application and do a possible refactor with React