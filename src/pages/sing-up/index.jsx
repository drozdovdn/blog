import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

import style from './style.css';

class SignUp extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        // label: PropTypes.string.isRequired
    };
    onSubmit = () => {
      this.props.signUpAction(this.props.dataForm);
    };
    checkLogin = () => {
        this.props.checkLoginAction(this.props.dataForm.login);
    };

    render() {
        const { errors } = this.props;
        return (
            <div className={style.form__sing__up}>
                <h1>Регистрация</h1>
                <div className={style.input__item}>
                    <div>
                        Логин
                    </div>
                    <div>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            error={errors.login}
                            onBlur={this.checkLogin}
                        />
                    </div>
                </div>
                <div className={style.input__item}>
                    <div>
                        E-mail
                    </div>
                    <div>
                        <Input
                            id="email"
                            error={errors.email}
                            value={this.props.dataForm.email}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>
                <div className={style.input__item}>
                    <div>
                        Имя
                    </div>
                    <div>
                        <Input
                            id="firstName"
                            error={errors.firstName}
                            value={this.props.dataForm.firstName}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>
                <div>
                    <div className={style.input__item}>
                        Фамилия
                    </div>
                    <div>
                        <Input
                            id="lastName"
                            error={errors.lastName}
                            value={this.props.dataForm.lastName}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>
                <div>
                    <div className={style.input__item}>
                        Пароль
                    </div>
                    <div>
                        <Input
                            id="password"
                            error={errors.password}
                            value={this.props.dataForm.password}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                </div>
                <button onClick={this.onSubmit} className={style.button}>Зарегистрироваться</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.signUp.dataForm,
    errors: state.signUp.errors
});

export default connect(mapStateToProps, Actions)(SignUp);
