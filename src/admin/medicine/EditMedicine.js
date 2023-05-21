import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditMedicine = (props) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [seller, setSeller] = useState('');
  const [desc, setDesc] = useState('');
  const { medid } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5185/api/Medicine/GetMedicineById?id=${medid}`
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [medid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5185/api/Medicine/EditMedicine?id=${medid}`,
        {
          id: medid,
          medicineName: name,
          price: price,
          image: image,
          seller: seller,
          description: desc,
          categoryId: list[0].categoryId,
        }
      );
      if (res.status == 200) {
        alert('Update Successfull');
        navigate('/viewmedicinesadmin');
      } else {
        alert('Update failed');
      }
    } catch (error) {
      console.log(error);
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
                    Edit Medicine
                  </p>

                  {list.map((item) => (
                    <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.medicineName}
                            onChange={(e) => setName(e.target.value)}
                            className='form-control'
                            placeholder='Medicine Name'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='form-control'
                            placeholder='Price'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.image}
                            onChange={(e) => setImage(e.target.value)}
                            className='form-control'
                            placeholder='Image'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.seller}
                            onChange={(e) => setSeller(e.target.value)}
                            className='form-control'
                            placeholder='Medicine Seller'
                          />
                        </div>
                      </div>

                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.description}
                            onChange={(e) => setDesc(e.target.value)}
                            className='form-control'
                            placeholder='Medicine Description'
                          />
                        </div>
                      </div>

                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button
                          type='submit'
                          className='btn btn-warning btn-lg'
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMedicine;
