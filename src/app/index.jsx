import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sing-up';
import About from 'src/pages/about';
import NewPost from 'src/pages/new-post';

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
                    <Route path='/' exact={true}>
                        <div>
                            <h1>Главная</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus.</p>
                        </div>
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/new-post'>
                        <NewPost/>
                    </Route>
                    <Route path='/sing-in'>
                        <SignIn/>
                    </Route>
                    <Route path='/sing-up' >
                        <SignUp/>
                    </Route>
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
