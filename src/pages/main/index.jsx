import React, {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from './action';
import { Link } from 'react-router-dom';
import style from './style.css';

class MainPage extends Component{
    componentDidMount() {
        this.props.getInitPostsAction();
        window.addEventListener('scroll', this.onScroll);
    }
    onScroll = (e) => {
        console.log(e)
    };
    onClickLike = (e) => {
        const id = e.target.id;
        this.props.addLikePostAction(id);
    };
    onClickDislike = (e) => {
        const id = e.target.id;
        this.props.addDislikePostAction(id);
    };
    render() {
        const {posts} = this.props;
        return (
            <div className={style.main__page}
                onScroll={this.onScroll}>
                {
                    posts.map( (el,index) => {

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
                                    <div>
                                        <span>{el.likesCount}</span>
                                        <button id={el.id} onClick={this.onClickLike}>Like</button>
                                    </div>
                                    <div>
                                        <span>{el.dislikesCount}</span>
                                        <button id={el.id} onClick={this.onClickDislike}>Dislike</button>
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