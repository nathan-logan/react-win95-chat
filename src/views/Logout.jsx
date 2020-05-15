import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    auth.signOut().then(() => navigate('/')).catch(error => console.error(error));
  }, [])

  return (
    <div>Logging you out...</div>
  )
}

export default Login
