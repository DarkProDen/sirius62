import React from 'react';
import './Header.css';
import minObrLogo from '../../img/obrz.png';
import logo from '../../img/logo.png';

function Header() {
  return (
    <header>
      <img className="min-obr-logo" src={minObrLogo}></img>
      <div className="header__content">
        <img className="header__logo" src={logo}></img>
        <div className="header__content__right">
          <h1 className="header__h1">
            Всероссийский конкурс
            <br />
            научно-технологических
            <br />
            проектов "Большие вызовы"
          </h1>
          <div className="header__h1__subtitle">Рязанская область</div>
          <a
            className="header__button"
            href="http://sirius62.ru/wp-content/uploads/2020/03/Bolshie_Vyzovy.pdf"
          >
            Результаты регионального трека
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;