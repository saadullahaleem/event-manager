import React, { Component } from 'react';
import { Container } from 'reactstrap';
import type { BaseReduxPropTypes } from '../../types/base-props-types';
import SignupForm from '../../components/SignupForm/SignupForm';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignup } from '../../actions/index';
import PropTypes from 'prop-types';

type Props = BaseReduxPropTypes & {
  userState: Object,
};

class Signup extends Component<Props> {
  signup = async e => {
    e.preventDefault();
    const {
        username,
        firstname,
        lastname,
        email,
        password,
      } = e.target.elements,
      { dispatch, history } = this.props,
      payload = {
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value,
        email: email.value,
        password: password.value,
      };

    const response = await dispatch(userSignup(payload));
    if (response && response.id) history.push('/login');
  };

  render() {
    return this.props.userState.token === null ? (
      <Container className="login-container">
        <h4>Sign Up</h4>
        <hr />
        <SignupForm onSubmit={this.signup} />
        <hr />
        <p className="centralized">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Container>
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  }
}

const mapStateToProps = state => ({ userState: { ...state.userState } });

export default connect(mapStateToProps)(Signup);