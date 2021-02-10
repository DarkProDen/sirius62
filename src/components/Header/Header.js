import React from 'react';
import './Header.css';
import './HeaderMobile.css';
import minObrLogo from '../../img/obrz.png';
import logo from '../../img/logo.png';
import Button from '../Button/Button';

function Header() {
  return (
    <header>
      <img
        className="min-obr-logo"
        src={minObrLogo}
        alt="Министерство образования и молодежной политики Рязанской области"
      ></img>
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Большие вызовы"></img>
        <div className="header__content__right">
          <h1 className="header__h1">
            <span className="header__text">
              <div className="header__text__title">БОЛЬШИЕ ВЫЗОВЫ</div>
              <div>
                ВСЕРОССИЙСКИЙ КОНКУРС
                <br />
                НАУЧНО-ТЕХНОЛОГИЧЕСКИХ ПРОЕКТОВ
              </div>
            </span>
          </h1>
          <div className="header__h1__subtitle">Рязанская область</div>
          <Button href="https://online.sochisirius.ru/">Личный кабинет</Button>
          <Button href="https://konkurs.sochisirius.ru/">Основной сайт конкурса</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
