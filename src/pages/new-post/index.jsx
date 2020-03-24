import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropsTypes from 'prop-types';
import Input from 'src/components/input';
import Textaera from 'src/components/textarea';
import * as Actions from './actions';

class NewPost extends Component{

    static propTypes = {
        dataForm: PropsTypes.object.isRequired,
        changeFieldAction: PropsTypes.func.isRequired
    };

    render() {
        return (
            <>
                <form action="">
                    <div>
                        <div>Title</div>
                        <div>
                            <Input
                                id='titlePost'
                                value = {this.props.dataForm.titlePost}
                                onChange = {this.props.changeFieldAction}
                            />
                        </div>
                    </div>
                    <div>
                        <div>Body</div>
                        <div>
                            <Textaera
                                id='bodyPost'
                                value = {this.props.dataForm.bodyPost}
                                onChange = {this.props.changeFieldAction}
                            />
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.newPost.dataForm
});


export default connect(mapStateToProps, Actions)(NewPost);