import axios from "axios";
import React, { useEffect, useState } from "react";
import adminStyles from "./admin.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteTreatment = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get(`https://github.com/elearninfotech1/mernfront4pmmay/treatment`)
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        alert("Unable to Fetch Treatment Data");
      });
  });
  const deletTreatmentData = (tid) => {
    axios
      .delete(
        `https://github.com/elearninfotech1/mernfront4pmmay/treatment/${tid}`
      )
      .then((res) => {
        alert("Treatment Deleted Suc...");
      })
      .catch((err) => {
        alert("Unable to Delete Treatment Data");
      });
  };
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table id="mytable" class="display">
                <thead>
                  <tr>
                    <th>TName</th>
                    <th>T.Desc</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {treatment.map((treat) => {
                    return (
                      <tr>
                        <td>{treat.tname}</td>
                        <td>{treat.tdesc}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deletTreatmentData(treat._id)}
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeleteTreatment;
