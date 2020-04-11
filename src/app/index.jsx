import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Header from 'src/components/header';

import MainPage from 'src/pages/main';
import PostPage from 'src/pages/post';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sing-up';
import About from 'src/pages/about';
import NewPost from 'src/pages/new-post';
import MyPage from 'src/pages/my-page';

import * as Actions from './actions';
import './style.css';

class App extends Component {
   //Аунтификация
    componentDidMount() {
      this.props.auth();
    }

    render() {
        return (
            <>
                <Header user={this.props.user} signOut={this.props.signOut}/>
                <Switch>
                    <Route path='/' exact={true} component={MainPage}/>
                    {this.props.user && <Route path='/my-page' exact={true} component={MyPage}/> }
                    <Route path='/post/:id' exact={true} component={PostPage}/>
                    <Route path='/about' exact={true} component={About}/>
                    {this.props.user && <Route path='/new-post' exact={true} component={NewPost}/>}
                    <Route path='/sing-in' exact={true} component={SignIn}/>
                    <Route path='/sing-up' exact={true} component={SignUp}/>
                </Switch>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        counter: state.applicationReducer.counter,
        user: state.applicationReducer.user
    });
};


export default connect(mapStateToProps, Actions)(App);
