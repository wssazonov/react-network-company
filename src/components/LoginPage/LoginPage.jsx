import React from 'react';
import logo from '../../assets/logo.svg'
import './LoginPage.scss'

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="logo"/>
        <div className="">
          <div className="input-form">
            <label>Почта</label>
            <div className="">
              <input value="your@mail.com"/>
            </div>
          </div>

          <div className="input-form">
            <label>Пароль</label>
            <div className="">
              <input value="0123456" type="password"/>
            </div>
          </div>
          <button className='primary-button'>Войти</button>
        </div>
      </div>
    </div>
  );
}


export default Login;
