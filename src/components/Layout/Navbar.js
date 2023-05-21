import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "../../Register";
import Dashboard from "../../Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../../Login";

const Navbar = (props) => {
    const { isLoggedIn, Auth, role } = props;

    const handleLogout = () => {
        props.Auth();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Medicine Online Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                   
                    {isLoggedIn && (
                        <>
                      
                        {role == "user" &&(
                            <>
                            <Link to='/dashboard' style={{ marginRight: '1' + 'em' }} class="btn btn-secondary">Dashboard</Link>
                            <Link to='/viewcart' style={{ marginRight: '1' + 'em' }} class="btn btn-info">View Cart</Link>
                            <Link to='/viewmedicines' style={{ marginRight: '1' + 'em' }} class="btn btn-warning">View Medicines</Link>
                            </>
                        )}
                            
                            {role == "admin" && (
                                <>
                                    <Link to='/viewusers' style={{ marginRight: '1' + 'em' }} class="btn btn-secondary">Display UserDetails</Link>
                                    <Link to='/viewcategories' style={{ marginRight: '1' + 'em' }} class="btn btn-info">Display Categories</Link>
                                    <Link to='/viewmedicinesadmin' style={{ marginRight: '1' + 'em' }} class="btn btn-warning">Display Medicines</Link>  
                                </>
                            )}
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item" style={{float:'right'}}>   <Link to="/login" onClick={handleLogout} className="btn btn-primary">Logout</Link></li>
                            </ul>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li class="nav-item" style={{float:'right'}}> <Link to='/register' style={{ marginRight: '1' + 'em' }} class="btn btn-success">Register</Link></li>
                           <li class="nav-item" style={{float:'right'}}> <Link to='/login' class="btn btn-info">Login</Link></li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;