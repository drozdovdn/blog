import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import style from './style.css';

 class PostPage extends Component{
     static propTypes = {
         data: PropTypes.object,
         getPostDataAction: PropTypes.func.isRequired,
         postUnmountAction: PropTypes.func.isRequired
     };
     componentDidMount() {
         const {match} = this.props;
         this.props.getPostDataAction(match.params.id);
     }
     componentWillUnmount() {
         this.props.postUnmountAction();
     }

     render() {
        const {data} = this.props;
        return (
                <div >
                    {data
                        ? <div className={style.post_block}>
                            <div className={style.post_title}>
                                <h1>{data.title}</h1>
                            </div>
                            <div className={style.post_content}>
                                <p>
                                    {data.content}
                                </p>
                            </div>
                        </div>
                        : <div>
                            loading...
                         </div>
                    }
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.postPage.data
    };
}

export default connect(mapStateToProps, Actions)(PostPage);