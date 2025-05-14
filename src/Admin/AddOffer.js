import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
const AddOffer = () => {
  const [title, setTitle] = useState("");
  const [odesc, setOdesc] = useState("");

  const addTreatmentData = (e) => {
    e.preventDefault();
    axios
      .post(`https://github.com/elearninfotech1/mernfront4pmmay/offers`, {
        title,
        odesc,
      })
      .then((res) => {
        alert("Offer Added Succ....");
        setTitle("");
        setOdesc("");
      })
      .catch((err) => {
        alert("Unable to Add Offer");
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className={adminStyles.bx_shadow}>
            <form onSubmit={addTreatmentData}>
              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
                  placeholder="O.Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="odesc"
                  className="form-control"
                  value={odesc}
                  placeholder="O.Desc"
                  onChange={(e) => setOdesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add Offers"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
