import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const DetailsAfterPayment = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const LoginId = localStorage.getItem("LoginId");
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/Cart/GetCartByUserId?id=${LoginId}`);
                setCart(res.data)
            }
            catch (error) {
                console.log(error);
            }
        };
        const getAddress = async () =>{
            try
            {
                const res1 = await axios.get(`http://localhost:5185/api/Address/GetAddressByUserId?id=${LoginId}`);
                setAddress(res1.data);
            }
            catch(error)
            {
                console.log(error);
            }
        };
        getData();
        getAddress();
        TotalPrice();
    }, []);

    const TotalPrice = async () => {
        var sum = 0
        cart.map(item => (
            sum = sum + item.price
        ))
        setTotal(sum)
    }

    return (
        <>
        <h2 style={{textAlign:'center'}} className="btn btn-success" >The Payment is Successfull</h2>

    <p style={{color:'green'}}>The Order has Been Placed</p>
    <h3>Order Details : </h3>
    <table style={{marginLeft:'auto',marginRight:'auto'}} border={1+'px'} cellpadding="10px" cellspacing="0">
        {address.map(a =>(
        <tr>
            <td><strong>Address : </strong></td>
            <td><strong>C/O : </strong>{address[0].userName} <br />
                <strong>Email Id : </strong>{address[0].email} <br />
                <strong>Mobile Number : </strong>{address[0].phone} <br />
                <strong>Address : </strong>{address[0].location} <br />
                <strong>Country : </strong>{address[0].country} <br />
                <strong>State : </strong>{address[0].state} <br />
            </td>
        
        
    </tr>
    ))}
    <tr>
       
        <td>
            {cart.map(item => (
                <>
                    <span><strong>Name : </strong>{item.name}</span><br />
                    <span><strong>Quantity : </strong> 1</span><br />
                    <span><strong>Price : </strong>{item.price}</span><br />
                    <span><strong>Seller : </strong>{item.seller}</span><br />
                    <span><strong>Total amount: </strong>120</span>
                    <hr />
                    </>
                    ))}
        </td>
        </tr>
        <tr>
            <td><strong>Total : </strong></td>
            <td><strong>{total}</strong></td>
        </tr>
    </table><br /> 

    <Link to='/viewmedicines' class="btn btn-warning" >Continue Ordering</Link>
    <Link to='/checkout' class="btn btn-dark">Back to CheckOut</Link>
    </>
    )
}

export default  DetailsAfterPayment;