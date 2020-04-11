import React, {Component} from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import Button from 'src/components/button';
import Modal from 'src/components/modal';
import style from './style.css';

class myPage extends Component{
    static propTypes = {
        isShowModal: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        dataUser: PropTypes.object.isRequired,
        getMyPageAction: PropTypes.func.isRequired,
        createFlagShowModal: PropTypes.func.isRequired,
        myPageUnmountAction: PropTypes.func.isRequired
    };
    componentDidMount() {
        const user = this.props.user;
        const id = user.id;
        this.props.getMyPageAction(id);
    };
    componentWillUnmount() {
        this.props.myPageUnmountAction();
    };

    onClick = () => {
        this.props.createFlagShowModal();
    };
    render() {
        const {firstName, lastName, patronymic, email, registrationDate, postsCount, likesCount, dislikesCount} = this.props.dataUser;
        return (
            <div className={style.my__page}>
                <div className={style.my__page_left}>
                    <img className={style.my__page_img}  src={`${window.location.origin}/images/`+this.props.user.avatar} alt="Аватар"/>
                </div>
                <div className={style.my__page_right}>
                    <span className={style.my__page_name}>{firstName} {lastName}</span>
                    <ul className={style.my__page_data_list}>
                        <li className={style.my__page_data_item}><span>Имя: </span>{firstName}</li>
                        <li className={style.my__page_data_item}><span>Фамилия: </span>{lastName}</li>
                        <li className={style.my__page_data_item}><span>Отчество: </span>{patronymic}</li>
                        <li className={style.my__page_data_item}><span>Дата регистрации: </span>{registrationDate} г.</li>
                        <li className={style.my__page_data_item}><span>Email: </span>{email}</li>
                        <li className={style.my__page_data_item}><span>Количество постов: </span>{postsCount}</li>
                        <li className={style.my__page_data_item}><span>Количество поставленных лайков: </span>{likesCount}</li>
                        <li className={style.my__page_data_item}><span>Количество поставленных дизлайков: </span>{dislikesCount}</li>
                    </ul>
                <Button value='Изменить пароль' onClick={this.onClick}/>
                </div>
                {
                    this.props.isShowModal && <Modal/>
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShowModal: state.myPage.isShowModal,
        user: state.applicationReducer.user,
        dataUser: state.myPage.dataUser
    }
};

export default connect(mapStateToProps, Actions)(myPage);