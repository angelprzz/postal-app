# Postal

**You can check the app in production at https://postal-app.netlify.app/**

This webapp has been built using **MongoDB**, **Apollo GraphQL** and **React** *(MERNG Stack)*.

Inside the app you will be able to:
* Register and login users.
* Create and delete posts in real time.
* Visualize posts created by other users.
* Like and comment them.

## How to run
1. Download or clone the project
2. Create a config.js file in the root of the project with a link to your MongoDB database and your secret key.
```
module.exports = {
    MONGODB: 'mongodb+srv://xxxxxx',
    SECRET_KEY: 'xxxxxx'
}
```
2. Install the dependencies with "npm install"
3. Start the project with "npm start".
4. Open http://localhost:3000 in your browser.
