import React, { useContext, useState } from "react";
import adminStyles from "./admin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const resetInputData = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback4pmmay.onrender.com/login`, {
        email,
        password,
      })
      .then((res) => {
        navigate("/admindashboard");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <main>
      <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Admin Login</h1>
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
                      name="email"
                      className="form-control"
                      value={email}
                      placeholder="Uname"
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
                      type="button"
                      className="btn btn-danger me-2"
                      value="Cancel"
                      onClick={resetInputData}
                    />
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Admin Login"
                    />
                  </div>
                </form>
                <div className="pb-3">
                  <NavLink className="float-end" to="/register">
                    Click Here for New User
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
