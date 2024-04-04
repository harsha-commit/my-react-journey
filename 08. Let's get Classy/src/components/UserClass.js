import React from "react";

/*
    Extend the class from React.Component
    Write JSX inside render() that is to be rendered
    constructor receives the props and it must have super call

    There was no concept of hooks at the time of class components
*/

// Read about why constructor must have super call
// DO NOT COMPARE CLASS BASED AND FUNCTIONAL COMPONENTS
// Lifecycle methods have been removed

/*
    What happens when a class based component is loaded
    - An object of class is created
    - The constructor is called
    - render() is called
    - componentDidMount() is called after mounting
*/

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: "Loading...",
      },
    };

    console.log(this.props.name + " " + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " " + "Child Component Did Mount");

    // API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      ...this.state,
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " " + "Component Did Update");
  }

  componentWillUnmount() {
    // Go to Contact or other page to execute this
    // Executes just before unmounting
    // For cleanup (of setTimeout(), etc)
    ///  we use return () => { } in useEffect()

    // This practice is recommended, because ignoring this might overload the app
    console.log(this.props.name + " " + "Component Will Unmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + " " + "Child Render");

    return (
      <div className="user-card">
        <img
          src={avatar_url}
          style={{
            width: "200px",
            height: "200px",
          }}
        />
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h4>Count - {count}</h4>
        <button
          onClick={() => {
            // DO NOT UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              ...this.userInfo,
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default UserClass;
