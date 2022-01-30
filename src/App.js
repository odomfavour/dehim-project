import React from "react";
import { Route, Routes } from "react-router";

// import logo from './logo.svg';
import './index.css';
import Home from "./screens/index"
import AdminDashboard from "./screens/admin/AdminDashboard/AdminDashboard";
import Signup from "./screens/signup/signup";
import SignIn from "./screens/signin/signIn";
import AddStaff from "./screens/admin/AddStaff/AddStaff";
import Confirmation from "./screens/confirmation/confirmation";
import Packages from "./screens/packages/packages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      <Route path="/admin/register-staff" element={<AddStaff/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/confirmation" element={<Confirmation/>}/>
      <Route path="/packages" element={<Packages/>}/>
    </Routes>
  );
}

export default App;
