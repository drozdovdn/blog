import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/button';
import Input from 'src/components/input';
import PropTypes  from 'prop-types';
import * as Actions from './actions';
import style from './style.css';

class Modal extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        modalUnmount: PropTypes.func.isRequired,
        closeModalAction: PropTypes.func.isRequired,
        currentPasswordAction: PropTypes.func.isRequired,
        changeModalFormAction: PropTypes.func.isRequired
    };
    componentWillUnmount() {
        this.props.modalUnmount();
    }

    closeModal=()=> {
        this.props.closeModalAction();
    };

    onSubmit =()=> {
        this.props.currentPasswordAction(this.props.dataForm);
    };
    render() {
        return (
            <div className={style.modal}>
                <div className={style.modal__content}>
                    <div className={style.modal__form}>
                        <div className={style.modal__form_item}>
                            <div>Старый пароль: </div>
                            <Input
                                id='currentPassword'
                                onChange={this.props.changeModalFormAction}
                                error={this.props.errors.currentPassword}

                            />
                        </div>
                        <div className={style.modal__form_item}>
                            <div>Новый пароль: </div>
                            <Input
                                id='newPassword'
                                onChange={this.props.changeModalFormAction}
                                error={this.props.errors.newPassword}
                            />
                        </div>
                        <Button onClick={this.onSubmit} value='Изменить' />
                    </div>
                    <div onClick={this.closeModal} className={style.modal__close}>
                        X
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataForm: state.modal.dataForm,
        errors: state.modal.errors
    }
};

export default connect(mapStateToProps, Actions)(Modal);