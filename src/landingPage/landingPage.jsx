import React, { Component } from 'react';
import './landingPage.css';
import logoJsx from './logo.jsx'


class LandingPage extends Component {
  render() {
    return (
      <div className="container-fullpage">
        <div className="logo-landing-box">
          <logoJsx/>
        </div>
        <div className="content-box">
          <h1 className="text-description commencement green">
            Voilà comment klaap fonctionne, nous voulons créer un réseau social vidéo professionnel pour les amateurs. Et nous voulons faire en sorte qu’il soit facile à utiliser que ce soit pour publier, rechercher ou regarder des vidéos.
          </h1>
          <h1 className="text-description kesako blue">
            Nous voulons, par le biais de klaap, créer un réseau de talents
            klaap se veux être la plateforme qui fera l'unanimité auprès des artistes de la vidéos. Avoir une App qui s’engage à donner une visibilité et une importance de votre travail au sein d’une grande communauté d’artistes. Ou de personnes a la recherche d’un réalisateur amateur dans ça ville. C’est pour cette raison que nous vous invitons à commencer à en parler autours de vous.
          </h1>
          <h1 className="text-description green klaap-action">
            Lorsque vous serais abonné à une chaîne, celle-ci s’affiche dans votre Home. Vous voyez un clip, un court-métrage, qui vous a plus ? Partager-le sur votre chaîne ou commenter. C’est se que feront les autres kLappeur et c’est ainsi que vous pourrez faire des rencontres, faire de future collaborations, ou avoir des conseils.
          </h1>
          <h1 className="text-description blue klaap-innover">
            Sérieusement kLaap c’est l’application vidéos que vous attendez, tous les contenues que les Klappeur publie seront sous mis à des votes pour élire le meilleur Klappeur du mois dans différente catégorie.
          </h1>
          <h1 className="text-description green klaap-fin">
            kLaap va être réaliser part des amateurs de contenue visuel. Pour vous, alors n’hésiter pas à nous donner des idées pour améliorer l’app.
          </h1>
        </div>
        <div className="input-container follow">
          <div className="text-container">
            <h1 className="text-form-landing">Laissez-nous votre email pour savoir quand la plateforme sera ouverte</h1>
          </div>
          <form method="post" action="/api/users">
            <div className="input-box">
              <input type="text" className="email-input" autoComplete="off" name="email" placeholder="email"/>
              <input type="text" className="name-input" autoComplete="off" name="name" placeholder="prenom"/>
              <button type="submit" className="button-submit-landing">valider</button>
            </div>
          </form>
          <div className="text-container">
            <h3 className="text-form-landing">Promis, on ne vous spamera pas !</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
