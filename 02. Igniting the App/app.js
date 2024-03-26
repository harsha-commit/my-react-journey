/* 
  Production Ready Processing 
    - Bundling, 
    - Code Splitting, 
    - Chunking, 
    - Minify, 
    - Image Optimization, etc
  
  React alone cannot make production ready apps

  tilde vs caret in json
    caret(^) - upgrade to minor update
    tilde(~) - upgrade to major update
*/

/*
  Igniting our app WITHOUT npx create-react-app
  (understanding under the hood, important for System Design)
  
  1. npm
    - package manager for JS
    - default package manager for Node JS
    - npm CLI Client + npm repository + npm private/public packages

    npx
      - execute a package

    Steps
    - npm init, creates package.json, manages dependencies versions

    package.json
      configuration for npm
      each package has a package.json
      dependencies - dependent packages for the project
        dev dependencies - used in development phase
        dependencies - also used in production

    package-lock.json
      maintains a record of every current version
        integrity is used to check if the version in prod is same as dev
  
    Packages used
      Bundler (parcel), create-react-app uses webpack and babel by default
      - npm install -D parcel (D for dev dependency)
      - npx parcel index.html (generates development build, hosts onto the local server)
      
      use npm install to download node_modules, if missing

      CDN way for React (costly operation, the server could be down, need to update URL) 
      is not a good way

        npm install react
        npm i react-dom

        Then import it into the code, but browser scripts cannot have import/export.
        So change html code
          <script type="module" src="app.js"></script>

      remove main: App.js in package.json

      - build is stored in dist/
      - build is all files minified into three main files and much more
      npx parcel build index.html - for production build

      in package.json (must works in mentioned, others might work)
      
      avoids unneccesary bundles

      "browserslist":{
        "last 2 versions",
      }

      CONGRATULATIONS, YOU HAVE CREATED YOUR OWN CREATE-REACT APP
      
      parcel features (more in documentation)
      - creates dev build
      - hosts on a server
      - HMR - Hot Module Replacement (Live Reload)
        - uses parcel-cache and dist
        - uses File Watching Algorithm (written in C++)
      - improves diagnostics - error and warning messages
      - Faster builds using caching
      - Image Optimisation
      - Minification
      - Bundling
      - Compress
      - Consistent Hashing
      - Code Splitting
      - Differential Bundling
        - supports older browsers
      - can host on HTTPS
      - Tree Shaking
        - removes unused code
      - Different Dev and Prod Bundles
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello from React"
);

console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { class: "children" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "There"),
  ]),
  React.createElement("div", { class: "children" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "There"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
