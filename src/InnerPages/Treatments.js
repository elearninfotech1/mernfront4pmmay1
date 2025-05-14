import React from "react";
import innerstyles from "./innerpages.module.css";

import { NavLink } from "react-router-dom";
import useCustomHokkEx from "./CustomHokkEx";

const Treatments = () => {
  const treatment = useCustomHokkEx(
    `https://github.com/elearninfotech1/mernfront4pmmay/treatment`
  );
  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Treatments</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            {treatment.map((treat) => {
              return (
                <div className="col-md-3">
                  <div className={`mb-4 ${innerstyles.bx_shadow}`}>
                    <NavLink
                      to={`/treatmentdetails/${treat._id}/${treat.tname}`}
                    >
                      {treat.tname}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Treatments;
