import React, { Component } from 'react';
import './landingPage.css';
import logoLanding from '../../public/assets/logo.svg'


class LandingPage extends Component {
  render() {
    return (
      <div className="container-fullpage">
        <div className="logo-landing-box">
          <img src={logoLanding} className="logo-landing" alt="Logo"/>
        </div>
        <div className="input-container">
          <h1 className="text-form-landing">Laissez-nous votre email pour savoir quand la plateforme sera ouverte</h1>
          <form method="post" action="/api/users">
            <div className="input-box">
              <input type="text" className="email-input" autocomplete="off" name="email" placeholder="email"/>
              <input type="text" className="name-input" autocomplete="off" name="name" placeholder="prenom"/>
              <button type="submit" className="button-submit-landing">valider</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
