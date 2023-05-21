import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewUsers = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5185/api/User/GetUserList'
        );
        setUserList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleDetails = async (x) => {
    props.userId(x);
  };

  const handleDelete = async (y) => {
    try {
      await axios.delete(`http://localhost:5185/api/User/DeleteUser?id=${y}`);
      const res = await axios.get('http://localhost:5185/api/User/GetUserList');
      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    <table class='table'>
      <thead>
        <h1>User Details</h1>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Created On</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.type}</td>
            <td>{user.createdOn}</td>
            <td>
              <Link
                to='/viewuserdetails'
                className='btn btn-warning'
                onClick={() => handleDetails(user.id)}
              >
                Details
              </Link>{' '}
              &nbsp; &nbsp;
              <button
                className='btn btn-success'
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ViewUsers;
