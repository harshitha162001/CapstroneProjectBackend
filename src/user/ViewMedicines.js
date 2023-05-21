import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewMedicines = (props) => {
    const [medicinesList, setMedicinesList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5185/api/Medicine/GetListOfMedicines");
                setMedicinesList(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);



    const handleCart = async (a,b,c,d,e) =>{
        try
        {
            await axios.put("http://localhost:5185/api/Cart/AddCarts",{
               name:a,
               price:b,
               seller:c,
               status:d,
               userId:e,
            })
        }
        catch(error)
        {
            console.error(error);
        }
    }

    return (
        <div>
            <div class="container" style={{ paddingTop: 50 + 'px' }}>
                {medicinesList.map(medicine => (
                    <div class="card" >
                        <div class="row g-0" style={{ paddingBottom: 5 + 'px' }}>
                            <div class="col-md-4">
                                <img src={medicine.image} class="card-img" alt="Card Image" style={{ height: 200 + 'px', width: 250 + 'px', paddingTop: 10 + 'px' }} />
                                <h5 class="card-title">{medicine.medicineName}</h5>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <br/>
                                    <p style={{color:"darkblue"}}>Description : <small>{medicine.description}</small></p>
                                    <div>
                                        <br/>
                                    <p style={{color:"darkgreen"}}>Manufactured By : <small>{medicine.seller}</small></p>
                                    </div>
                                    <div>
                                        <br/>
                                        <p  style={{color:"darkgoldenrod"}}>Price : {medicine.price}</p>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-success me-md-2" type="button">View Details</button>
                                        <button class="btn btn-dark" key={medicine.id} onClick={() => handleCart(medicine.medicineName,medicine.price,medicine.seller,"Pending",localStorage.getItem("LoginId"))} type="button">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ViewMedicines;