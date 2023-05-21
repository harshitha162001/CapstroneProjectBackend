import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CheckOut = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const LoginId = localStorage.getItem('LoginId');

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5185/api/Cart/GetCartByUserId?id=${LoginId}`
        );
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    TotalPrice();
  }, []);

  const TotalPrice = async () => {
    var sum = 0;
    cart.map((item) => (sum = sum + item.price));
    setTotal(sum);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:5185/api/Adress/AddAdress',
        {
          userName: uname,
          email: email,
          phone: phone,
          location: location,
          country: country,
          state: state,

          userId: LoginId,
        }
      );
      if (response.status == 200) {
        alert('Successfull');
        navigate('/DetailsAfterPayment');
      } else {
        alert('failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
        <symbol id='check2' viewBox='0 0 16 16'>
          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
        </symbol>
        <symbol id='circle-half' viewBox='0 0 16 16'>
          <path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z' />
        </symbol>
        <symbol id='moon-stars-fill' viewBox='0 0 16 16'>
          <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
          <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
        </symbol>
        <symbol id='sun-fill' viewBox='0 0 16 16'>
          <path d='M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
        </symbol>
      </svg>

      <div className='dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        <button
          className='btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center'
          id='bd-theme'
          type='button'
          aria-expanded='false'
          data-bs-toggle='dropdown'
          aria-label='Toggle theme (auto)'
        >
          <svg className='bi my-1 theme-icon-active' width='1em' height='1em'>
            <use href='#circle-half'></use>
          </svg>
          <span className='visually-hidden' id='bd-theme-text'>
            Toggle theme
          </span>
        </button>
        <ul
          className='dropdown-menu dropdown-menu-end shadow'
          aria-labelledby='bd-theme-text'
        >
          <li>
            <button
              type='button'
              class='dropdown-item d-flex align-items-center'
              data-bs-theme-value='light'
              aria-pressed='false'
            >
              <svg
                className='bi me-2 opacity-50 theme-icon'
                width='1em'
                height='1em'
              >
                <use href='#sun-fill'></use>
              </svg>
              Light
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href='#check2'></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='dropdown-item d-flex align-items-center'
              data-bs-theme-value='dark'
              aria-pressed='false'
            >
              <svg
                className='bi me-2 opacity-50 theme-icon'
                width='1em'
                height='1em'
              >
                <use href='#moon-stars-fill'></use>
              </svg>
              Dark
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href='#check2'></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='dropdown-item d-flex align-items-center active'
              data-bs-theme-value='auto'
              aria-pressed='true'
            >
              <svg
                className='bi me-2 opacity-50 theme-icon'
                width='1em'
                height='1em'
              >
                <use href='#circle-half'></use>
              </svg>
              Auto
              <svg className='bi ms-auto d-none' width='1em' height='1em'>
                <use href='#check2'></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div className='container'>
        <main>
          <div className='py-5 text-center'>
            <h2>Checkout</h2>
          </div>

          <div className='row g-5'>
            <div className='col-md-5 col-lg-4 order-md-last'>
              <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-primary'>Your cart</span>
                <span className='badge bg-primary rounded-pill'>
                  {cart.length}
                </span>
              </h4>
              <ul className='list-group mb-3'>
                {cart.map((item) => (
                  <li className='list-group-item d-flex justify-content-between lh-sm'>
                    <div>
                      <h6 className='my-0'>{item.name}</h6>
                      <small className='text-body-secondary'>Quantity</small>
                      <small className='text-body-secondary'>1</small>
                    </div>
                    <span className='text-body-secondary'>{item.price}</span>
                  </li>
                ))}
                <li className='list-group-item d-flex justify-content-between bg-body-tertiary'>
                  <div className='text-success'>
                    <h6 className='my-0'>Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className='text-success'>−%5</span>
                </li>
                <li className='list-group-item d-flex justify-content-between'>
                  <span>Total </span>
                  <strong>120</strong>
                </li>
              </ul>
            </div>
            <div className='col-md-7 col-lg-8'>
              <h4 className='mb-3'>Fill The Details Here</h4>
              <form className='needs-validation' onSubmit={handleSubmit}>
                <div className='row g-3'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        placeholder='User Name'
                      />
                      <span className='text-danger'></span>
                    </div>
                  </div>

                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                    />
                    <span className='text-danger'></span>
                    <div className='invalid-feedback'>
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='Phone Number'
                    />
                    <span className='text-danger'></span>
                    <div className='invalid-feedback'>
                      Please enter a valid Mobile Number for shipping updates.
                    </div>
                  </div>

                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder='Address'
                    />
                    <span className='text-danger'></span>
                    <div className='invalid-feedback'>
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <select
                      className='form-select'
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      id='country'
                      required
                    >
                      <option value=''>Country...</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                    <span className='text-danger'></span>
                    <div className='invalid-feedback'>
                      Please select a valid country.
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <select
                      className='form-select'
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      id='state'
                      required
                    >
                      <option value=''>State...</option>
                      <option>Karnataka</option>
                      <option>Delhi</option>
                      <option>Kerala</option>
                      <option>Andhra Pradesh</option>
                    </select>
                    <span className='text-danger'></span>
                    <div className='invalid-feedback'>
                      Please provide a valid state.
                    </div>
                  </div>
                </div>

                <hr className='my-4' />
                <button type='submit' className='btn btn-success'>
                  Continue to CheckOut
                </button>
              </form>
            </div>
          </div>
        </main>

        <footer className='my-5 pt-5 text-body-secondary text-center text-small'>
          <p className='mb-1'>&copy; 2017–2023 Company Name</p>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a href='#'>Privacy</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Terms</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default CheckOut;
