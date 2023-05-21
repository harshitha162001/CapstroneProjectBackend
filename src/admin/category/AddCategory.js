import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:5185/api/Category/AddCategory',
        {
          categoryName: name,
          description: desc,
        }
      );
      if (response.status == 200) {
        alert('Category Added Successfull');
        navigate('/viewcategories');
      } else {
        alert('Operation Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-lg-12 col-xl-11'>
          <div style={{ borderRadius: '25px' }}>
            <div className='card-body p-md-5'>
              <div className='row justify-content-center'>
                <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                  <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Add Category
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
                          placeholder='Category Name'
                        />
                      </div>
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                      <i className='fas fa-user fa-lg me-3 fa-fw'></i>
                      <div className='form-outline flex-fill mb-0'>
                        <input
                          type='text'
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                          id='form3Example1c'
                          className='form-control'
                          placeholder='Category Description'
                        />
                      </div>
                    </div>

                    <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                      <button
                        type='submit'
                        className='btn btn-secondary btn-lg'
                      >
                        Add Category
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default AddCategory;
