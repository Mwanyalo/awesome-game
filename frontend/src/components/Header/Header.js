import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-title">
          <h5>Awesome Game</h5>
        </div>
        {localStorage.APDsession !== undefined && (
          <div className="logout" onClick={() => this.props.logout(this.props)}>
            <h5>Logout</h5>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
