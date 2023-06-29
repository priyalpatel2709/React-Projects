import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // Make API request to authenticate user and retrieve JWT token
      const response = await axios.post('/api/login', credentials);

      // Decode JWT token
      const decodedToken = jwt_decode(response.data.token);

      // Dispatch the login success action with the decoded token
      dispatch(loginSuccess(decodedToken));
    } catch (error) {
      // Dispatch the login failure action
      dispatch(loginFailure(error.response.data));
    }
  };
};

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};
