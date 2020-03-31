import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import Login from '../layouts/authentication/Login';

const makePrivate = Component =>
  connect()(() => {
    const { isLoggedIn } = useSelector(state => state.authentication);

    return isLoggedIn ? <Component /> : <Login />;
  });

export default makePrivate;
