import React from "react";
import innerStyles from "./innerpages.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CampaignIcon from "@mui/icons-material/Campaign";
import useCustomHokkEx from "./CustomHokkEx";
const Offers = () => {
  const offer = useCustomHokkEx(`https://mernback4pmmay.onrender.com/offers`);
  return (
    <main>
      <section className={innerStyles.bread}>
        <Container maxWidth="sm">
          <Grid size={12}>
            <h1>Offers</h1>
          </Grid>
        </Container>
      </section>
      <section className={`pt-4 pb-2 ${innerStyles.offers}`}>
        <Container maxWidth="lg" className="p-0">
          {offer.map((off) => {
            return (
              <Grid size={12}>
                <p className="border-bottom border-3 pb-4">
                  <CampaignIcon className="text-success" />
                  &nbsp;
                  {off.odesc}
                </p>
              </Grid>
            );
          })}
        </Container>
      </section>
    </main>
  );
};

export default Offers;
