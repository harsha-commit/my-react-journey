import { useState } from "react";
import { Link } from "react-router-dom";

// ONLY CREATE HOOKS INSIDE COMPONENT FUNCTION
// Don't create state variables inside if-else, for loop or a inner function
// Read about Best Practices

// Linking to URLs using <a> tag is NOT RECOMMENDED, as it reloads the page
// Using Link from react-router-dom, allows to navigate to other pages without reload
// THIS IS THE REASON FOR SINGLE PAGE APPLICATIONS

/*
  Types of Routing in Web Apps
  - Server Side Routing
    - For each route/ new page, a request is sent and then page is loaded
  - Client Side Routing
    - Because all the code is already at client, the routing is done here itself
*/

/*
  Dynamic routing - routing method where the routes of an application are determined dynamically
*/

const Header = () => {
  let btnName = "Login";
  // Local State Variables
  const [stateBtnName, setStateBtnName] = useState("Login");

  // WITHOUT DEPENDENCY ARRAY => useEffect() is called after each render
  // EMPTY DEPENDENCY ARRAY => useEffect() is called ONLY after first render
  /* 
    WITH DEPENDENCY ARRAY => useEffect() is called useEffect() is called after first render 
    and everytime after a dependency changes
  */

  return (
    <div className="header">
      <div className="logo">
        <span>Macky</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName = "Log Out";
              console.log(btnName);
              stateBtnName === "Login"
                ? setStateBtnName("Logout")
                : setStateBtnName("Login");
            }}
          >
            {stateBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
