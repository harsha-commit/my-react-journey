/*
  Before
    npx parcel index.html

  in package.json
  "scripts": {
    "test": "jest",
    "start": "npx parcel index.html",
    "build": "parcel build index.html"
  }

  Now (Industry Standard)
    npm run start OR npm start
    npm run build
*/

import React from "react";
import ReactDOM from "react-dom/client";

// React Element, equivalent to DOM Element
// React Element(Object) ---> RENDER TO DOM --> HTML Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// JSX
// It is NOT HTML inside JS
// It has HTML-like or XML-like syntax
// Not Pure JS (Not ECMAScript, JS Engine cannot understand)
// parcel transpiles the JSX, before it reaches the JS Engine
// parcel uses babel for this transpilation (JSX -> React Code)

// JSX => React.createElement => JS Object => HTML Element (Rendered on DOM)
// For multi lines use JSX inside (), not required for single line
const jsxHeading = (
  <h1 id="heading" className="title">
    Namaste React using JSX 🚀
  </h1>
);

console.log(jsxHeading); // React Element

// React Component
// Class based Components - OLD
// Functional Components - NEW

// React Functional Component
// A Normal JS Function that returns React Element (some JSX)
// Each Functional Component MUST return a React Element with single root

// A JS Expression can be inside JSX using {}
// So we can put React Elements inside React Element or inside Component

// Industry Standard - Using Arrow functions and NOT using return
const Title = () => (
  <div>
    <h1>Namaste React from Functional Component</h1>
    {jsxHeading}
  </div>
);

const maliciousData = "YOU ARE HACKED";
// This is called Component Composition (one component in another)
// JSX can escape this kind of attack (Data Sanitization)
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    <h2>I'm inside Heading Component</h2>
    {console.log("This is Cross Side Scripting: " + maliciousData)}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a Functional component
root.render(<HeadingComponent />);

/*
  A Case of Infinite Loop
  -----------------------

  const HeadingComponent = () => (
    <div className="container">
      {jsxTitle}
    </div>
  );

  const jsxTitle = (
    <h1>
      <HeadingComponent/>
    </h1>
  )
*/
