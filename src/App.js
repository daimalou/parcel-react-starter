import React, { Component } from "react";
import logo from "./logo.svg";
import className from "./app.scss";

class App extends Component {
  render() {
    return (
      <div className={className.App}>
        <header className={className.Appheader}>
          <img src={logo} className={className.Applogo} alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={className.Applink}
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React!!!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
