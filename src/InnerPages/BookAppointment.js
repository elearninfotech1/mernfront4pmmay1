import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const BookAppointment = () => {
  const { tname1, dname1 } = useParams();
  const [tname, setTname] = useState("" || tname1);
  const [dname, setDname] = useState("" || dname1);
  const [pname, setPname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const appointmentDataStore = (e) => {
    e.preventDefault();
    axios
      .post(`https://github.com/elearninfotech1/mernfront4pmmay/appointment`, {
        tname,
        dname,
        pname,
        phone,
        email,
        subject,
        message,
      })
      .then((res) => {
        alert("Appointment Succ....");
        setTname("");
        setDname("");
        setPname("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        alert("Unable to do Appointment");
      });
  };
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Book Appointment</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`pt-5 pb-5 ${innerStyles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className={`pt-5 px-5 ${innerStyles.bx_shadow}`}>
                <form onSubmit={appointmentDataStore}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="tname"
                          className="form-control"
                          placeholder="TName"
                          value={tname}
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
                          placeholder="DName"
                          value={dname}
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
                          name="pname"
                          className="form-control"
                          placeholder="PName"
                          value={pname}
                          onChange={(e) => setPname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <input type="submit" className="btn btn-success" />
                      </div>
                    </div>
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

export default BookAppointment;
