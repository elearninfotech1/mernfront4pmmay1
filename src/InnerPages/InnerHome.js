import { Container } from "@mui/material";
import React from "react";
import Banner from "./banner.jpg";
import innerStyles from "./innerpages.module.css";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import useCustomHokkEx from "./CustomHokkEx";
const Home = () => {
  const treatment = useCustomHokkEx(
    `https://mernback4pmmay.onrender.com/treatment`
  );
  return (
    <main>
      <section>
        <Container maxWidth={false} disableGutters>
          <img src={Banner} alt="Banner" />
        </Container>
      </section>
      <section className="py-4">
        <Container disableGutters>
          <h1 className={innerStyles.title}>
            Our <span>Treatment</span>
          </h1>
          <Grid container spacing={2}>
            {treatment.map((treat) => {
              return (
                <Grid size={3}>
                  <NavLink to={`/treatmentdetails/${treat._id}/${treat.tname}`}>
                    <div className={`mb-4 ${innerStyles.bx_shadow}`}>
                      {treat.tname}
                    </div>
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default Home;
