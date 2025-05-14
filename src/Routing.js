import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./InnerPages/AddStudent";
import DeleteStudent from "./InnerPages/DeleteStudent";
import EditStudent from "./InnerPages/EditStudent";
import StudentDetails from "./InnerPages/StudentDetails";
import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import AdminDashboard from "./Admin/AdminDashboard";
import AddTreatment from "./Admin/AddTreatment";
import DeleteTreatment from "./Admin/DeleteTreatment";
import AddDoctor from "./Admin/AddDoctor";
import DeleteDoctor from "./Admin/DeleteDoctor";
import AddOffer from "./Admin/AddOffer";
import DeleteOffer from "./Admin/DeleteOffer";
import AppointmentData from "./Admin/AppointmentData";
import DeleteAppointmentData from "./Admin/DeleteAppointmentData";
import Home from "./InnerPages/InnerHome";
import AboutUs from "./InnerPages/AboutUs";
import Treatments from "./InnerPages/Treatments";
import BookAppointment from "./InnerPages/BookAppointment";
import Offers from "./InnerPages/Offers";
import ContactUs from "./InnerPages/ContactUs";
import TreatementDetails from "./InnerPages/TreatementDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/treatmentdetails/:tid/:tname"
          element={<TreatementDetails />}
        />
        <Route
          path="/bookappointment/:tname1/:dname1"
          element={<BookAppointment />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddTreatment />} />
          <Route path="deletetreatment" element={<DeleteTreatment />} />
          <Route path="adddoctor" element={<AddDoctor />} />
          <Route path="deletedoctor" element={<DeleteDoctor />} />
          <Route path="addoffer" element={<AddOffer />} />
          <Route path="deleteoffer" element={<DeleteOffer />} />
          <Route path="appointmentdata" element={<AppointmentData />} />
          <Route
            path="deleteappointmentdata"
            element={<DeleteAppointmentData />}
          />
        </Route>

        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
        <Route path="/editstudent" element={<EditStudent />} />
        <Route path="/studentdetails/:sid" element={<StudentDetails />} />
      </Routes>
    </div>
  );
};

export default Routing;
