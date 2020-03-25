import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import style from './style.css';

 class PostPage extends Component{
     componentDidMount() {
         const {match} = this.props;
         console.log(this.props);
         this.props.getPostDataAction(match.params.id);
     }
     render() {
        const {data} = this.props;
        return (
                <div className={style.post_page}>
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