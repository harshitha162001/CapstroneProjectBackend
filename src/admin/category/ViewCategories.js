import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewCategories = (props) => {
    const [categoryList,setCategoryList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5185/api/Category/GetListOfCategoryMedicines");
                setCategoryList(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleDetails = async (x) =>{
        props.CategoryId(x);
    }

    const handleEdit = async (z) => {
        props.CategoryId(z);
    }

    const handleDelete = async (y) =>{
        try
        {
            await axios.delete(`http://localhost:5185/api/Category/DeleteCategory?id=${y}`);
            const res = await axios.get("http://localhost:5185/api/Category/GetListOfCategoryMedicines");
            setCategoryList(res.data);
        }
        catch(error)
        {
            console.log(error);
        }
       
    }
    return(
        <>
        <h1>Category details</h1>
        <Link to='/addcategory' className="btn btn-primary">Add New Category</Link>
        <table class="table" style={{paddingTop:300+'px'}}>
            <thead>
                <tr>
                    <th>Category Id</th>
                    <th>Category Name</th>
                    <th>Category Description</th>
                </tr>
            </thead>
            <tbody>
                {categoryList.map(category => (
                    <tr>
                    <td>{category.categoryId}</td>
                    <td>{category.categoryName}</td>
                    <td width={800+'px'}>{category.description}</td>
                    <td>
                        <Link to='/viewcategorydetails' className="btn btn-warning" onClick={() => handleDetails(category.categoryId)} >Details</Link> &nbsp;
                        <button className="btn btn-info" onClick={() => handleDelete(category.categoryId)} >Delete</button>&nbsp;
                        <Link to='/editcategory'className="btn btn-dark" onClick={() => handleEdit(category.categoryId)}>Edit</Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ViewCategories;