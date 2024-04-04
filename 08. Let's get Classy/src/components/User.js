import { useEffect, useState } from "react";

// Read about why useEffect() cannot have async function as argument

const User = ({ name, location, contact }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello from useEffect()");
    }, 1000);

    return () => {
      // Analogous to componentWillUnmount()
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name - {name}</h2>
      <h3>Location - {location}</h3>
      <h4>Contact - {contact}</h4>
      <h4>Count - {count}</h4>
      <h4>Count2 - {count2}</h4>
    </div>
  );
};

export default User;
