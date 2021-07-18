# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# How to deploy React App to github pages

1. Install the gh-pages package as a "dev-dependency" of the app

   `npm i gh-pages --save-dev`
  
2. Add few properties to your *package.json*

   -> At first line, add `homepage` property. Set it's value to `http://{username}.github.io/{repo-name}`.
      `"homepage": "http` 
