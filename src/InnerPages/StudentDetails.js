import React, { useEffect, useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
const StudentDetails = () => {
  const [student, setStudent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { sid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://mernback4pmmay.onrender.com/student/${sid}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((err) => {
        alert("Unable to Fetch Student Data");
      });
  }, []);

  const updateStudentData = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://github.com/elearninfotech1/mernfront4pmmay/student/${sid}`,
        {
          name,
          email,
          phone,
          address,
        }
      )
      .then((res) => {
        alert("Student Updated Succ....");
        navigate("/editstudent");
      })
      .catch((err) => {
        alert("Unable to Add Student Data");
      });
  };
  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Edit Student</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className={innerstyles.bx_shadow}>
                <form onSubmit={updateStudentData}>
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
                      type="submit"
                      className="btn btn-success"
                      value="Add Student"
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

export default StudentDetails;
