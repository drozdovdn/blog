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

    render() {
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
    dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
