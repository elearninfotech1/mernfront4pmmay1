import React from "react";
import adminStyles from "./admin.module.css";
import { NavLink } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <ul className={adminStyles.adminsidebar}>
      <li>
        <NavLink to="">Add Treatement</NavLink>
      </li>
      <li>
        <NavLink to="deletetreatment">Delete/Edit Treatement</NavLink>
      </li>
      <li>
        <NavLink to="adddoctor">Add Doctor</NavLink>
      </li>
      <li>
        <NavLink to="deletedoctor">Delete/Edit Doctor</NavLink>
      </li>
      <li>
        <NavLink to="addoffer">Add Offers</NavLink>
      </li>
      <li>
        <NavLink to="deleteoffer">Delete/Edit Offers</NavLink>
      </li>
      <li>
        <NavLink to="appointmentdata">Appointment Data</NavLink>
      </li>
      <li>
        <NavLink to="deleteappointmentdata">
          Delete/Edit Appointment Data
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminSidebar;
