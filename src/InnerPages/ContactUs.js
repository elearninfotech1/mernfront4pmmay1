import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const appointmentDataStore = (e) => {
    e.preventDefault();
    axios
      .post(`https://github.com/elearninfotech1/mernfront4pmmay/contactus`, {
        name,
        phone,
        email,
        subject,
        message,
      })
      .then((res) => {
        alert("Mail Send Succ....");
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        alert("Unable to send Mail");
      });
  };
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`pt-5 pb-5 ${innerStyles.contactus}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={`pt-5 px-5 ${innerStyles.bx_shadow}`}>
                <form onSubmit={appointmentDataStore}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
            <div className="col-md-4">
              <h6>Surgy Life</h6>
              <p>C2, Amrutha hills, </p>
              <p>Punjagutta Officers Colony,</p>
              <p>Punjagutta, Hyderabad, </p>
              <p> Telangana - 082 </p>
              <p>
                <CallIcon /> +91 89853 18181
              </p>
              <p>
                <CallIcon /> +91 89854 18181
              </p>
              <p>
                <EmailIcon /> info@surgylife.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`pt-1 ${innerStyles.contactus}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.640445952104!2d78.45168477462785!3d17.42903450160507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912d20ab5c7f%3A0xcdc7623e855882e0!2sSurgyLife%20-%20Surgeries%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1745924774218!5m2!1sen!2sin"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
