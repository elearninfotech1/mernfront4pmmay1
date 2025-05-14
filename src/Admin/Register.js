import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const resetInputData = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/signup`, {
        name,
        email,
        password,
        phone,
        address,
      })
      .then((res) => {
        alert("Admin Registration Succ....");
        navigate("/admin");
      })
      .catch((err) => {
        alert("Unable to do Admin Registration ");
      });
  };
  return (
    <main>
      <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Admin Register</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className={adminStyles.bx_shadow}>
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={phone}
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={address}
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="button"
                      className="btn btn-danger me-2"
                      value="Cancel"
                      onClick={resetInputData}
                    />
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Admin Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
