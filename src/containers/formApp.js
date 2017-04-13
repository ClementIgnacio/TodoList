'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Form from '../components/form';
import * as formActions from '../actions/formAction';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class FormApp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { state, actions } = this.props
    return (
      <Form
        todos={state.todos}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.form
  }),
  (dispatch) => ({
    actions: bindActionCreators(formActions, dispatch)
  })
)(FormApp);