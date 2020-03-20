import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from './style.css'


class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    // label: PropTypes.string.isRequired
  };

  onClick = () => {
    console.log(this.props);
   this.props.push('/');
  };



  render() {
    return (
      <div className={style.form__sing__in}>
        <h1>Вход</h1>
        <div className={style.input__item}>
          <div className={style.input__label}>
            Логин:
          </div>
          <div>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div className={style.input__item}>
          <div className={style.input__label}>
            Пароль:
          </div>
          <div>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <button className={style.button} onClick={this.onClick}>Вход</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(mapStateToProps, {push, ...Actions})(SignIn);
