import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

root.render(<AppLayout />);

// One component per file - Best Practice
// Grouping by features, file types (component, apis)
// Hardcorded data (URLs, JSON Objects) should be stored seperately

/*
  * Named Export *
    export const data1 = {};

  * Default Export *
    const data2 = {};
    export default data2;

  * Named Import *
    import {data1} from "./filename1";

  * Default Import *
    import data2 from "./filename2"

  - using both named and default exports in the same file can be considered an anti-pattern
*/

/*
  Framework/ Library
  - Makes Developer experience simple
  - Optimizes the performance
*/

/*
  React -> Faster DOM Manipulation

  Keys for lists -> To skip re-render and change only the element

  Reconciliation Algorithm (React Fiber)

  Virtual DOM -> DOM stored wrt React Elements

  Diff Algorithm
    compares virtual dom (updated) to it's previous virtual dom
    updates the actual dom
*/
