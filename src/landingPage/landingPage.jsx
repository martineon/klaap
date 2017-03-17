import React, { Component } from 'react';
import './landingPage.css';


class LandingPage extends Component {
  render() {
    return (
      <div className="container-fullpage">

        <div className="input-container">
          <form method="post" action="/api/users">
            <input type="text" name="email" placeholder="EMAIL"/>
            <input type="text" name="name" placeholder="NAME"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
