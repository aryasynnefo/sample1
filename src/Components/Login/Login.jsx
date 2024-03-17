import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField/InputField';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  const validateInputs = async () => {
    let isValid = true;

    if (!user.username.trim()) {
      setErrors(prevState => ({ ...prevState, usernameError: 'Username cannot be empty' }));
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(user.username)) {
      setErrors(prevState => ({ ...prevState, usernameError: 'Username should contain only letters' }));
      isValid = false;
    } else if (user.username.length > 12) {
      setErrors(prevState => ({ ...prevState, usernameError: 'Username should contain up to 12 characters' }));
      isValid = false;
    } else {
      setErrors(prevState => ({ ...prevState, usernameError: '' }));
    }

    if (!user.password.trim()) {
      setErrors(prevState => ({ ...prevState, passwordError: 'Password cannot be empty' }));
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(user.password)) {
      setErrors(prevState => ({ ...prevState, passwordError: 'Password required' }));
      isValid = false;
    } else if (user.password.length < 8) {
      setErrors(prevState => ({ ...prevState, passwordError: 'Password should contain 8 characters' }));
      isValid = false;
    } else {
      setErrors(prevState => ({ ...prevState, passwordError: '' }));
    }

    if (!user.confirmPassword.trim()) {
      setErrors(prevState => ({ ...prevState, confirmPasswordError: 'This field cannot be empty' }));
      isValid = false;
    } else if (user.password !== user.confirmPassword) {
      setErrors(prevState => ({ ...prevState, confirmPasswordError: 'Passwords do not match' }));
      isValid = false;
    } else {
      setErrors(prevState => ({ ...prevState, confirmPasswordError: '' }));
    }

    if (isValid) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Successfully Logged in');
        navigate('/home');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await validateInputs();
  };

  const handleChange = (text, name) => {
    setUser(prevState => ({
      ...prevState,
      [name]: text
    }));
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <InputField
            type="text"
            value={user.username}
            onChange={(text) => handleChange(text, 'username')}
            name={'username'}
            label="Username"
            maxLength={12}
            error={(errors.usernameError && !user.username.trim()) || (errors.usernameError && !/^[a-zA-Z]+$/.test(user.username)) || (errors.usernameError && user.username.length > 12)}
            errorMessage={errors.usernameError}
            note="Required up to 12 characters"
          />
          <InputField
            type="password"
            value={user.password}
            onChange={(text) => handleChange(text, 'password')}
            name={'password'}
            label="Password"
            maxLength={10}
            error={(errors.passwordError && !user.password.trim()) || (errors.passwordError && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(user.password)) || (errors.passwordError && user.password.length < 8)}
            errorMessage={errors.passwordError}
            note="Password must be a minimum of 8 characters, special chars, uppercase, and lowercase letters and numbers."
          />
          <InputField
            type="password"
            value={user.confirmPassword}
            onChange={(text) => handleChange(text, 'confirmPassword')}
            name={'confirmPassword'}
            label="Confirm_Password"
            maxLength={10}
            error={(errors.confirmPasswordError && !user.confirmPassword.trim()) || (errors.confirmPasswordError && user.password !== user.confirmPassword)}
            errorMessage={errors.confirmPasswordError}
          />

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
