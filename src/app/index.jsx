import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';

class App extends Component {
  render() {
    return (
      <div>
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
