import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
const AddDoctor = () => {
  const [tname, setTname] = useState("");
  const [dname, setDname] = useState("");
  const [qaulification, setQualification] = useState("");
  const [exp, setExp] = useState("");
  const [address, setAddress] = useState("");

  const addTreatmentData = (e) => {
    e.preventDefault();
    axios
      .post(`https://github.com/elearninfotech1/mernfront4pmmay/doctor`, {
        tname,
        dname,
        qaulification,
        exp,
        address,
      })
      .then((res) => {
        alert("doctor Added Succ....");
        setTname("");
        setDname("");
        setQualification("");
        setExp("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to Add Doctor");
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className={adminStyles.bx_shadow}>
            <form onSubmit={addTreatmentData}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="tname"
                      className="form-control"
                      value={tname}
                      placeholder="T.Name"
                      onChange={(e) => setTname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="dname"
                      className="form-control"
                      value={dname}
                      placeholder="D.Name"
                      onChange={(e) => setDname(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="exp"
                      className="form-control"
                      value={exp}
                      placeholder="Exp"
                      onChange={(e) => setExp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="qaulification"
                      className="form-control"
                      value={qaulification}
                      placeholder="Qualification"
                      onChange={(e) => setQualification(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="mb-4">
                  <textarea
                    name="address"
                    className="form-control"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Add Doctor"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
