import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewCategoryDetails = (props) => {
    const [categoryDetails, setCategoryDetails] = useState([]);
    const { catid } = props;
    console.log(catid);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/Category/GetCategoryById?id=${catid}`);
                setCategoryDetails(res.data);
                console.log(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [catid]);

    //console.log(userDetails);
    //console.log(userDetails[0].firstName);

    return (
    <>
        <table style={{ alignContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} border="1" cellpadding="10px" cellspacing="0">
            {categoryDetails.map(item => (
                <>
                <tr><td><strong>Category Id : </strong>{categoryDetails[0].categoryId}</td></tr>
                <tr><td><strong>Category Name : </strong>{categoryDetails[0].categoryName}</td></tr>
                <tr><td><strong>Description : </strong>{categoryDetails[0].description}</td></tr>
                </>
            ))}


        </table><br></br>
        <Link to='/viewcategories' className="btn btn-info">Back</Link>
        </>
    )
}

export default ViewCategoryDetails;