import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './LogIn.module.css';
import auth from './auth';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.username = username;
    auth.password = password;
    onLogin(username, password);
  };

  
  return (
    <div className={styles.Container}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:700" />
      </head>
      <div className={styles.loginContainer}>
        <img className = {styles.logo} src="/images/blue_text.svg" alt="Logo" />
        <form onSubmit={handleLogin}>
          <div className="formgroup">
            <input
              className={styles.input}
              type="text"
              id="username"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.loginButton} type="submit">Login</button>
        </form>
      </div>

    </div>
  );
};

export default Login;
