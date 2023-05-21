import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = (props) => {
    const [userDetails, setUserDetails] = useState([]);
    const { userid } = props;
    console.log(userid);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/User/GetUserById?id=${userid}`);
                setUserDetails(res.data);
                console.log(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [userid]);

    return (
    <>
   
        <table style={{ alignContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} border="1" cellpadding="10px" cellspacing="0">
            {userDetails.map(item => (
                <>
                <tr><td><strong>Name : </strong>{userDetails[0].name}</td></tr>
               
                <tr><td><strong>Email : </strong>{userDetails[0].email}</td></tr>
                <tr><td><strong>Type : </strong>{userDetails[0].type}</td></tr>
                <tr> <td><strong>Created On : </strong>{userDetails[0].createdOn}</td></tr>
                </>
            ))}


        </table><br></br>
        <Link to='/viewusers' className="btn btn-info">Back</Link>
        </>
    )
}

export default UserDetails;