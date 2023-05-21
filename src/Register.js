import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [createdon, setCreatedon] = useState('');

  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:5185/api/User/AddUser',
        {
          name,
          password,
          email,
          type,
          createdon,
        }
      );
      if (response.status == 200) {
        alert('Registration Successfull');
        navigate('/login');
      } else {
        alert('Registration Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <section className='vh-100' style={{ background: '#eee' }}>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div /*className='card text-black'*/ style={{ borderRadius: '25px' }}>
              {/* <div className='card-body p-md-5'> */}
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                      Register
                    </p>

                    <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id='form3Example1c'
                            className='form-control'
                            placeholder=' Name'
                          />
                        </div>
                      </div>

                   

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='form3Example4c'
                            className='form-control'
                            placeholder='Password'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='form3Example3c'
                            className='form-control'
                            placeholder='Your Email'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            id='form3Example3c'
                            className='form-control'
                            placeholder='add your type(admin/user)'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='date'
                            value={createdon}
                            onChange={(e) => setCreatedon(e.target.value)}
                            id='form3Example3c'
                            className='form-control'
                            placeholder='Account Created On'
                          />
                        </div>
                      </div>

                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button
                          type='submit'
                          className='btn btn-success btn-lg'
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                   <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    {/* <img
                      src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8bbc66e02e81095950de55fcc9347f5'
                      className='img-fluid'
                      alt='Sample image'
                    /> */}
                  </div> 
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    // </section>
  );
};

export default Register;
