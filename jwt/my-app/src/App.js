import React from 'react';
import { useSelector } from 'react-redux';
// import Login from './Login';
import Login from './component/Login';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.username}!</h2>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
