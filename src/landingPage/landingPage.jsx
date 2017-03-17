import React, { Component } from 'react';
import './landingPage.css';


class LandingPage extends Component {
  render() {
    return (
      <div className="container-fullpage">

        <div className="input-container">
          <form mathod="post" action="/api/users">
            <input type="text" placeholder="NAME"/>
            <input type="text" placeholder="EMAIL"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
