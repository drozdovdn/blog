import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from './style.css';

import API from 'src/api';

export default class Header extends Component {

  render() {
    return (
      <header className={style.header}>
          <nav className={style.header__menu_nav}>
            <ul className={style.header__menu} >
                <li><Link className={style.header__menu__link} to="/">Главная</Link></li>
                <li><Link className={style.header__menu__link} to="/about">О сайте</Link></li>
                { this.props.user && <li><Link className={style.header__menu__link} to="/new-post">Новый пост</Link></li> }

            </ul>
          </nav>
          {!this.props.user
              ?
              <ul className={style.header__registration}>
                  <li><Link className={style.header__menu__link} to="/sing-in">Вход</Link></li>
                  <li><Link className={style.header__menu__link} to="/sing-up">Регистрация</Link></li>
              </ul>
              :
              <ul className={style.header__registration}>
                  <li className={style.header__user}>
                      <Link className={style.header_user__block} to="/my-page">
                      <img className={style.header_img} src={`${window.location.origin}/images/`+this.props.user.avatar} alt="Аватар"/>
                      <span className={style.header__user__login}>{this.props.user.login}</span>
                      </Link>
                  </li>
                  <li className={style.header__exit} onClick={this.props.signOut}>Выход</li>
              </ul>

          }
      </header>
    )
  }
}
