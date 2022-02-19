# Image Processing API

This is a project for the Advanved Full-Stack Web Development Nanodegree presented by Udacity.

The project is to make an Image Processing API which you can use to resize your images to specific dimensions stated in the api call.

## Who is it useful for

The benefit of such a functionality is that web site developer can use it to reduce the size of images the users upload and by that they save server disk space.

## Installation

In making this project I used:

- TypeScript for development
- Node.js as my runtime environment
- NPM as my package manager
- Sharp package used for image processing
- Jasmine for testing
- ESlint for linting my code
- Prettier for formatting my code

Version of my tools when started develping:

- Node.js v16.13.0
- TypeScript v4.5.5
- Express v4.17.3
- Sharp v0.30.1
- Jasmine v4.0.2
- ESlint v8.9.0
- Prettier v2.5.1
- Axios v0.26.0

for more detaills on all packages used you can see package.json file

## Scripts Usage

There is multiple scripts defined in package.json file and I'm gonna state them and what are meant for.

- npm run build
  - Transpile my code from TypeScript to JavaScript
- npm run test
  - To transpile the code to JavaScript and then run the tests afterwards
  - **_Important Note: The express server must be up and running when running the tests_**
- npm run nodemon
  - Start the server without transpiling the code to JavaScript and restart the server after every time you edit the code and save it
- npm run prettier
  - Format the code
- npm run lint
  - Lint the code and if there a quick possible fix it will do it.
