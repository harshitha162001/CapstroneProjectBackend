import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewCart = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const LoginId = localStorage.getItem('LoginId');

  const { userid } = props;

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

  const handleRemove = async (y) => {
    try {
      await axios.delete(`http://localhost:5185/api/Cart/DeleteCarts?id=${y}`);
      const res = await axios.get(
        `http://localhost:5185/api/Cart/GetCartByUserId?id=${LoginId}`
      );
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      await axios.delete('http://localhost:5185/api/Cart/EmptyCart');
      setCart([]);
      TotalPrice();
    } catch (error) {
      console.log(error);
    }
  };

  const TotalPrice = async () => {
    var sum = 0;
    cart.map((item) => (sum = sum + item.price));
    setTotal(sum);
  };

  return (
    <div>
      {cart.length != 0 && (
        <>
          <table class='table table-success'>
            <thead>
              <tr>
                <th>Cart Id</th>
                <th>Medicine Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.cartId}>
                  <td>{item.cartId}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.seller}</td>
                  <td>{item.status}</td>
                  <td>
                    <span style={{ fontWeight: 'bold' }}>{item.price}</span>
                  </td>
                  <td>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => handleRemove(item.cartId)}
                    >
                      REMOVE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan='5'>
                  <span style={{ fontWeight: 'bold' }}>Total Amount</span>
                </td>
                <td>
                  <span style={{ fontWeight: 'bold' }}>120</span>
                </td>
              </tr>
            </tfoot>
          </table>
          <Link to='/viewmedicines' className='btn btn-info'>
            Back
          </Link>{' '}
          &nbsp;
          <button className='btn btn-danger' onClick={() => handleEmptyCart()}>
            Empty Cart
          </button>
          &nbsp;
          <Link to='/checkout' className='btn btn-secondary'>
            Check Out
          </Link>{' '}
          &nbsp;
        </>
      )}
      {cart.length == 0 && (
        <>
          <img
            src='https://cdn.dribbble.com/users/602333/screenshots/6305886/empty-cart.png'
            width={60 + '%'}
            height={500 + 'px'}
          />
          <Link to='/viewmedicines' className='btn btn-info'>
            MedicinePage
          </Link>{' '}
          &nbsp;
        </>
      )}
    </div>
  );
};

export default ViewCart;
