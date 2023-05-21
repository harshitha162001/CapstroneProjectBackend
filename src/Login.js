import React, { Component, Fragment, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  localStorage.setItem('isLoggedIn', false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5185/api/User/Login?email=${email}&password=${password}`
      );
      if (response.status == 200 && response.data.length == 1) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('isLoggedIn', true);
        console.log(response.data);
        console.log(response.data[0].type);
        localStorage.setItem('LoginId', response.data[0].id);
        props.Role(response.data[0].type);
        console.log(localStorage.getItem('isLoggedIn'));
        props.Auth();

        alert('login successfull');
        navigate('/dashboard');
      } else {
        alert('login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      {/* <section className='vh-100' style={{ background: '#eee' }}> */}
        
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-lg-12 col-xl-11'>
              <div /*className='card text-black'*/ style={{ borderRadius: '25px' }}>
                <div className='card-body p-md-5'>
                  <div className='row justify-content-center'>
                    <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                      <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                        Login
                      </p>

                      <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='email'
                              id='form3Example3c'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className='form-control'
                              placeholder='Your Email'
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <input
                              type='password'
                              id='form3Example4c'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className='form-control'
                              placeholder='Password'
                            />
                          </div>
                        </div>

                        <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                          <button
                            type='submit'
                            className='btn btn-primary btn-lg'
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      {/* </section> */}
    </React.Fragment>
  );
};

export default Login;
