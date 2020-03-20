import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sing-up';

import * as Actions from './actions';
import './style.css';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path='/' exact>
                        <div>
                            <h1>Главная</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus.</p>
                        </div>
                    </Route>
                    <Route path='/about'>
                        <h1>О сайте</h1>
                    </Route>
                    <Route path='/new-post'>
                        <h1>New post</h1>
                    </Route>
                    <Route path='/sing-in'>
                        <SignIn/>
                    </Route>
                    <Route path='/sing-up' >
                        <SignUp/>
                    </Route>
                </Switch>


                {/*<div className="footer">*/}
                {/*count = {this.props.counter}*/}
                {/*<button*/}
                {/*onClick={() => this.props.increaseAction(1)}*/}
                {/*>*/}
                {/*increase 1*/}
                {/*</button>*/}
                {/*<button*/}
                {/*onClick={() => this.props.increaseAction(55)}*/}
                {/*>*/}
                {/*increase 55*/}
                {/*</button>*/}
                {/*<button*/}
                {/*onClick={() => this.props.decreaseAction(1)}*/}
                {/*>*/}
                {/*decrease*/}
                {/*</button>*/}
                {/*</div>*/}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        counter: state.applicationReducer.counter
    });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };

export default connect(mapStateToProps, Actions)(App);
