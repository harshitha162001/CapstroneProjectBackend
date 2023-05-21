import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditCategories = (props) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const { catid } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5185/api/Category/GetCategoryById?id=${catid}`
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [catid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5185/api/Category/EditCategory?id=${catid}`,
        {
          categoryId: catid,
          categoryName: name,
          description: desc,
        }
      );
      if (res.status == 200) {
        alert('Update Successfull');
        navigate('/viewcategories');
      } else {
        alert('Update failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(list);
  console.log(catid);
  console.log(name);
  console.log(desc);

  return (
    <div className='container h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-lg-12 col-xl-11'>
          <div style={{ borderRadius: '25px' }}>
            <div className='card-body p-md-5'>
              <div className='row justify-content-center'>
                <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                  <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Edit Category
                  </p>

                  {list.map((item) => (
                    <form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
                      <div className='d-flex flex-row align-items-center mb-4'>
                        <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                        <div className='form-outline flex-fill mb-0'>
                          <input
                            type='text'
                            id='form3Example4c'
                            value={list.categoryName}
                            onChange={(e) => setName(e.target.value)}
                            className='form-control'
                            placeholder='Category Name'
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
                            placeholder='Category Description'
                          />
                        </div>
                      </div>

                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg'
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

export default EditCategories;
