import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import * as Actions from './actions';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        <div className="footer">
          count = {this.props.counter}
          <button
            onClick={() => this.props.increaseAction(1)}
          >
            increase 1
          </button>
          <button
            onClick={() => this.props.increaseAction(55)}
          >
            increase 55
          </button>
          <button
            onClick={() => this.props.decreaseAction(1)}
          >
            decrease
          </button>
        </div>
      </div>
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
