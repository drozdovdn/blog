import React, {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from './action';
import { Link } from 'react-router-dom';
import style from './style.css';

class MainPage extends Component{
    componentDidMount() {
        this.props.getPostsAction();
    }
    render() {
        const {posts} = this.props;
        return (
            <div className={style.main__page}>
                {
                    posts.map( el => {

                       return (
                                <div key={el.id} className={style.main__post}>
                                    <div className={style.main__post_title}>
                                        <Link className={style.main__post_title_link}
                                              to={`post/${el.id}`}
                                        >{el.title}</Link>
                                    </div>
                                    <div className={style.main__post_content}>
                                        <p>
                                            {el.content}
                                        </p>
                                    </div>
                                </div>
                       )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.main.posts
    }
};


export default connect(mapStateToProps, Actions)(MainPage);