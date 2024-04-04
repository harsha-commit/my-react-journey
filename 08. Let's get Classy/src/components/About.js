import { Component } from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This is a about page</h2>
//       {/* <User name="Harsha Vardhan" location="Hyderabad" contact="@h8rsha" /> */}
//       <UserClass name="Jack" location="New York" contact="@crackjack" />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Page - From Class Component</h1>
        <h2>This is a about page</h2>
        <UserClass
          name="First Child"
          location="New York"
          contact="@crackFirst"
        />
        {/* <UserClass
          name="Second Child"
          location="New Jersey"
          contact="@camSecond"
        /> */}
      </div>
    );
  }
}

/*
  EXPECTED OUTPUT WITH SECOND CHILD
  ---------------
  Parent Constructor
  Parent Render
  First Child Constructor
  First Child Render
  First Child Component Did Mount
  Second Child Constructor
  Second Child Render
  Second Child Component Did Mount
  Parent Component Did Mount

  ACTUAL OUTPUT WITH SECOND CHILD
  -------------
  Parent Constructor
  Parent Render
  First Child Constructor
  First Child Render
  Second Child Constructor
  Second Child Render
  <-- DOM UPDATED IN SINGLE BATCH -->
  First Child Component Did Mount
  Second Child Component Did Mount
  Parent Component Did Mount

  REFER: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  React batches the Render phase of children for optimization
  - because DOM Manipulation is expensive, the render phase and commit phase are batched
*/

export default About;
