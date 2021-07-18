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

         $ npm i gh-pages --save-dev
  
2. Add few properties to your *package.json*

   - At first line, add `homepage` property. Set it's value to `http://{username}.github.io/{repo-name}`.

         "homepage": "http://jontysachdeva10.github.io/jonty.github.io"  

   - In existing scripts property, add..

          "scripts": {
          //...
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
          }
          
          
 3. Make sure you commit your code to your repo.

        
 4. Generate *production build* for your app
   
         $ npm run deploy
         
    - That's it. Your app is now accessible at the URL you mentioned at 2nd step.
    - In my case, it's [http://jontysachdeva10.github.io/jonty.github.io](http://jontysachdeva10.github.io/jonty.github.io)
    - After deployment is finished, a new branch by the name of `gh-pages` will be generated in your repo. It will contain built app code.

 ### Everytime you make a change in code, make sure to deploy the code later, to see the changes in your deployed app.     
         
