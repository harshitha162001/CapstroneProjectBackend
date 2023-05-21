import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Login from './Login';
import ViewCart from './user/ViewCart';
import ViewMedicines from './user/ViewMedicines';
import ViewUsers from './admin/ViewUsers';
import Register from './Register';
import Dashboard from './Dashboard/Dashboard';
import UserDetails from './admin/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AddCategory from './admin/category/AddCategory';
import EditCategories from './admin/category/EditCategories';
import ViewCategories from './admin/category/ViewCategories';
import ViewCategoryDetails from './admin/category/ViewCategoryDetails';

import AddMedicine from './admin/medicine/AddMedicine';
import ViewMedicineDetails from './admin/medicine/ViewMedicineDetails';
import ViewMedicinesAdmin from './admin/medicine/ViewMedicinesAdmins';
import EditMedicine from './admin/medicine/EditMedicine';
import CheckOut from './user/Checkout';
import DetailsAfterPayment from './user/DetailsAfterPayment';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [userid, setUserId] = useState(0);
  const [catid, setCategoryId] = useState(0);
  const [medid, setMedId] = useState(0);
  const [cartid, setCartId] = useState(0);

  const Auth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const Role = (parameter) => {
    setRole(parameter);
  };

  const userId = (parameter) => {
    setUserId(parameter);
  };

  const CategoryId = (parameter) => {
    setCategoryId(parameter);
  };

  const MedicineId = (parameter) => {
    setMedId(parameter);
  };

  const CartId = (parameter) => {
    setCartId(parameter);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar isLoggedIn={isLoggedIn} Auth={Auth} role={role} />
        <Routes>
          <Route
            exact
            path='/login'
            Component={(props) => (
              <Login {...props} Auth={Auth} Role={Role} userId={userId} />
            )}
          />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/dashboard' Component={Dashboard} />
          <Route
            exact
            path='/viewmedicines'
            Component={(props) => <ViewMedicines {...props} userid={userid} />}
          />
          <Route
            exact
            path='/viewusers'
            Component={(props) => <ViewUsers {...props} userId={userId} />}
          />
          <Route
            exact
            path='/viewuserdetails'
            Component={(props) => <UserDetails {...props} userid={userid} />}
          />
          <Route
            exact
            path='/viewcategories'
            Component={(props) => (
              <ViewCategories {...props} CategoryId={CategoryId} />
            )}
          />
          <Route
            exact
            path='/viewcategorydetails'
            Component={(props) => (
              <ViewCategoryDetails {...props} catid={catid} />
            )}
          />
          <Route
            exact
            path='/editcategory'
            Component={(props) => <EditCategories {...props} catid={catid} />}
          />
          <Route exact path='/addcategory' Component={AddCategory} />
          <Route
            exact
            path='/viewmedicinesadmin'
            Component={(props) => (
              <ViewMedicinesAdmin {...props} MedicineId={MedicineId} />
            )}
          />
          <Route
            exact
            path='/viewmedicinedetails'
            Component={(props) => (
              <ViewMedicineDetails {...props} medid={medid} />
            )}
          />
          <Route
            exact
            path='/editmedicine'
            Component={(props) => <EditMedicine {...props} medid={medid} />}
          />
          <Route exact path='/addmedicine' Component={AddMedicine} />
          <Route
            exact
            path='/viewcart'
            Component={(props) => <ViewCart {...props} userid={userid} />}
          />
          <Route exact path='/checkout' Component={CheckOut} />
          <Route exact path='/detailsafterpayment' Component={DetailsAfterPayment} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
