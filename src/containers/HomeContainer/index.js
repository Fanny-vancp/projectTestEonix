import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from '../../views/Home';
import { makeSelectHomeContainerCounter } from '../../modules/Counter/selector';
import { incrementAction } from '../../modules/Counter/action';
import { decrementAction } from '../../modules/Counter/action';
import { useInjectReducer } from '../../utils/injectReducer';

import reducer from '../../modules/Counter/reducer';

const key = 'homeContainer';

function HomeContainer(props) {
  useInjectReducer({ key, reducer });

  return (<Home {...props} />);
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeContainer);

