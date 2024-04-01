import { useState } from "react";

const Header = () => {
  let btnName = "Login";
  // React has no direct way of knowing changes in data
  // Each render (function call) creates a new variable, so const is valid
  // For state variable, when state is updated,
  /// value from useState() is not used, but value from previous setValue() is used
  const [stateBtnName, setStateBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <span>Macky</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName = "Log Out";
              // Variable got updated, but not the UI
              console.log(btnName);
              // Re-render of the component using state
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
