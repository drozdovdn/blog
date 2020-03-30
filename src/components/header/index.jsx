import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <nav>
            <ul className={style.header__menu}>
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
                  <li className={style.header__user}>Привет: {this.props.user.login}</li>
                  <li className={style.header__exit} onClick={this.props.signOut}>Выход</li>
              </ul>

          }
      </header>
    )
  }
}
