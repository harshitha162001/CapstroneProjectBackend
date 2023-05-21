import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5185/api/Medicine/Search?query=${query}`
      );
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Medicine store</h1>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {result.map((item) => (
        <div key={item.id}>
          <div class='card'>
            <div class='row g-0' style={{ paddingBottom: 5 + 'px' }}>
              <div class='col-md-4'>
                <img
                  src={item.image}
                  class='card-img'
                  alt='Card Image'
                  style={{
                    height: 300 + 'px',
                    width: 60 + 'px',
                    paddingTop: 50+ 'px',
                  }}
                />
                <h5 class='card-title'>{item.medicineName}</h5>
              </div>
              <div class='col-md-8'>
                <div class='card-body'>
                  <p>
                    Description : <small>{item.description}</small>
                  </p>
                  <div>
                    <p>
                      Manufactured By : <small>{item.seller}</small>
                    </p>
                  </div>
                  <div>
                    <p>Price : {item.price}</p>
                  </div>
                  <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <p style={{ paddingRight: 110 + 'px' }}>
                      Available in Stock
                    </p>
                    <p style={{ paddingRight: 80 + 'px' }}>Faster Delivery</p>
                    <button class='btn btn-warning me-md-2' type='button'>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
