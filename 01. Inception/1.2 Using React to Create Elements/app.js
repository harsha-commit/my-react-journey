// Fundamental of a frontend framework - manipulate DOM using Javascript
// Most expensive operation - DOM Node Manipulation
// the object attribute is to give attributes to an element
// Assignment - props
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello from React"
);

// object, type is Symbol(react.element)
// ReactElement(Object) => HTML(Browser Understands), HOW ??
console.log(heading);

/*

<div id="parent">
  <div class="children">
    <h1>Hello</h1>
    <h2>There</h2>
  </div>
  <div class="children">
    <h1>Hello</h1>
    <h2>There</h2>
  </div>
</div>

*/

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
// root.render(heading);
root.render(parent);
