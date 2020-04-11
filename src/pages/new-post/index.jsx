import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropsTypes from 'prop-types';
import Button from 'src/components/button';

import Input from 'src/components/input';
import Textaera from 'src/components/textarea';
import * as Actions from './actions';
import style from './style.css';

class NewPost extends Component{

    static propTypes = {
        dataForm: PropsTypes.object.isRequired,
        changeFieldAction: PropsTypes.func.isRequired,
        newPostAction: PropsTypes.func.isRequired,
        newPostUnmountAction: PropsTypes.func.isRequired
    };

    componentWillUnmount() {
        this.props.newPostUnmountAction();
    }

    onSubmit = () => {
        this.props.newPostAction(this.props.dataForm);
    };
    render() {
        return (
            <div className={style.new_post_page}>
                <div className={style.new_post_block}>
                    <h1 className={style.new_post_title}>Новый пост</h1>
                    <div>
                        <div  className={style.new_post_input}>
                            <Input
                                id='title'
                                value = {this.props.dataForm.title}
                                onChange = {this.props.changeFieldAction}
                                placeholder='Заголовок поста'
                            />
                        </div>
                    </div>
                    <div>
                        <div className={style.new_post_textarea}>
                            <Textaera
                                id='content'
                                value = {this.props.dataForm.content}
                                onChange = {this.props.changeFieldAction}
                                placeholder='Содержание поста'
                            />
                        </div>
                    </div>
                    <Button value='Создать пост' onClick={this.onSubmit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.newPost.dataForm
});


export default connect(mapStateToProps, Actions)(NewPost);