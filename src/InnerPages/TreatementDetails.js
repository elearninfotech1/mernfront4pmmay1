import React, { useEffect, useState } from "react";
import innerstyles from "./innerpages.module.css";
import { Container, Grid } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const TreatementDetails = () => {
  const [data, setData] = useState("");
  const [doctor, setDoctor] = useState([]);
  const { tid, tname } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://mernback4pmmay.onrender.com/treatment/${tid}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("Unable to Fetch Treatment Data");
      });
    //let tname = data.tname;
    axios
      .get(`https://github.com/elearninfotech1/mernfront4pmmay/doctor/${tname}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Unable to Fetch Treatment Data");
      });
  }, []);

  return (
    <main>
      <section className={innerstyles.bread}>
        <Container disableGutters>
          <Grid size={12}>
            <h1>{data.tname}</h1>
          </Grid>
        </Container>
      </section>
      <section className="py-4">
        <Container disableGutters>
          <Grid size={12}>
            <p>{data.tdesc}</p>
          </Grid>
          {
            <Grid size={8}>
              {doctor.map((doc) => {
                return (
                  <div className="border-bottom pb-2 my-4 d-flex justify-content-between">
                    <div>
                      <h6>{doc.dname}</h6>
                      <p>
                        {doc.qaulification}, {doc.exp}
                      </p>
                      <p>{doc.address}</p>
                    </div>
                    <div>
                      <NavLink
                        to={`/bookappointment/${doc.tname}/${doc.dname}`}
                      >
                        <button className="btn btn-success">
                          Book Appointment
                        </button>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </Grid>
          }
        </Container>
      </section>
    </main>
  );
};

export default TreatementDetails;
