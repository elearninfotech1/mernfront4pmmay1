import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
const AddTreatment = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");

  const addTreatmentData = (e) => {
    e.preventDefault();
    axios
      .post(`https://github.com/elearninfotech1/mernfront4pmmay/treatment`, {
        id,
        tname,
        tdesc,
      })
      .then((res) => {
        alert("Treatment Added Succ....");
        setTname("");
        setTdesc("");
      })
      .catch((err) => {
        alert("Unable to Add Treatment Data");
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
                  name="tname"
                  className="form-control"
                  value={tname}
                  placeholder="T.Name"
                  onChange={(e) => setTname(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="tdesc"
                  className="form-control"
                  value={tdesc}
                  placeholder="T.Desc"
                  onChange={(e) => setTdesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add Treatment"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTreatment;
