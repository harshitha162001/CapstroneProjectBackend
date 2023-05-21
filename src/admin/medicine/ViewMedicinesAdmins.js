import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewMedicinesAdmin = (props) => {
    const [medicineList,setMedicineList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5185/api/Medicine/GetListOfMedicines");
                setMedicineList(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleDetails = async (x) =>{
        props.MedicineId(x);
    }

    const handleEdit = async (z) => {
        props.MedicineId(z);
    }

    const handleDelete = async (y) =>{
        try
        {
            await axios.delete(`http://localhost:5185/api/Medicine/DeleteMedicine?id=${y}`);
            const res = await axios.get("http://localhost:5185/api/Medicine/GetListOfMedicines");
            setMedicineList(res.data);
        }
        catch(error)
        {
            console.log(error);
        }
       
    }
    return(
        <>
        <h1>Medicine Details</h1>
        <Link to='/addmedicine' className="btn btn-warning">Add New Medicine</Link>
        <table class="table" style={{paddingTop:300+'px'}}>
            <thead>
                <tr>
                    <th>Medicine Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Seller</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {medicineList.map(medicine => (
                    <tr>
                    <td>{medicine.id}</td>
                    <td>{medicine.medicineName}</td>
                    <td><img src={medicine.image} style={{ height: 200 + 'px', width: 250 + 'px', paddingTop: 10 + 'px' }} /></td>
                    <td>{medicine.price}</td>
                    <td>{medicine.seller}</td>
                    <td width={800+'px'}>{medicine.description}</td>
                    <td>
                        <Link to='/viewmedicinedetails' className="btn btn-warning" onClick={() => handleDetails(medicine.id)} >Details</Link> &nbsp;
                        <button className="btn btn-info" onClick={() => handleDelete(medicine.id)} >Delete</button>&nbsp;
                        <Link to='/editmedicine'className="btn btn-dark" onClick={() => handleEdit(medicine.id)}>Edit</Link>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ViewMedicinesAdmin;