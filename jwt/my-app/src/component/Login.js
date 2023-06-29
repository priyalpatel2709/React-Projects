import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { login } from '../actions/authActions';

import {login} from '../actions/authActions'
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('username')} placeholder="Username" />
        <input type="password" {...register('password')} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
