import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes  from 'prop-types'
import * as Actions from './action';
import { Link } from 'react-router-dom';
import style from './style.css';

class MainPage extends Component{

    static propTypes = {
        posts: PropTypes.array.isRequired,
        isLoadingPosts: PropTypes.bool.isRequired,
        nPosts: PropTypes.number.isRequired,
        getInitPostsAction: PropTypes.func.isRequired,
        getUnmountAction: PropTypes.func.isRequired,
        getScrollPostsAction: PropTypes.func.isRequired,
        addLikePostAction: PropTypes.func.isRequired,
        addDislikePostAction: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getInitPostsAction(this.props.nPosts);
        window.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        this.props.getUnmountAction();
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const {nPosts, isLoadingPosts} = this.props;
        const windowsRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if(( windowsRelativeBottom <= document.documentElement.clientHeight + 100) && !isLoadingPosts ) {
            this.props.getScrollPostsAction(nPosts);
        }
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
                    posts.map( (el) => {

                       return (
                                <div key={el.id} className={style.main__post}>
                                    <div className={style.main__post_title}>
                                        <Link className={style.main__post_title_link} to={`post/${el.id}`} >{el.title}</Link>
                                    </div>
                                    <div className={style.main__post_content}>
                                        <p>
                                            {el.content}
                                        </p>
                                    </div>
                                    <div className={style.main_block_like_views}>
                                    <div className={style.main_block}>
                                        <span>{el.likesCount}</span>
                                        <button className={style.button_like} id={el.id} onClick={this.onClickLike}>Like</button>
                                    </div>
                                    <div className={style.main_block}>
                                        <span>{el.dislikesCount}</span>
                                        <button className={style.button_dislike} id={el.id} onClick={this.onClickDislike}>Dislike</button>
                                    </div>
                                    <div className={style.main_block}>
                                        <span>{el.viewsCount}</span>
                                        <div className={style.views}> </div>
                                    </div>
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
        posts: state.main.posts,
        isLoadingPosts: state.main.isLoadingPosts,
        nPosts: state.main.nPosts,
    }
};

export default connect(mapStateToProps, Actions)(MainPage);