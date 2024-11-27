import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectHomeContainerCounter } from '../../modules/Counter/selector';
import { incrementAction } from '../../modules/Counter/action';
import { decrementAction } from '../../modules/Counter/action';
import { useInjectReducer } from '../../utils/injectReducer';

import reducer from '../../modules/Counter/reducer';
import Counter from '../../component/counter';

const key = 'homeContainer';

function CounterContainer(props) {
  // Dynamically inject the reducer into the Redux store under the specified key
  useInjectReducer({ key, reducer });

  // Render the home component with props connected to the Redux store
  return (<Counter {...props} />);
}

// mapStateToProps gets the counter state from the store via a selector
export const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

// mapDispatchToProps transform actions to props for the component
export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

// Connect the Redux state and actions to the HomeContainer component
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(CounterContainer);

