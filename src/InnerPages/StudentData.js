import React, { useEffect, useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import useCustomHokkEx from "./CustomHokkEx";
const StudentData = () => {
  const student = useCustomHokkEx(
    `https://mernback4pmmay.onrender.com/student`
  );

  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Student Data</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {student.map((stu) => {
                    return (
                      <tr>
                        <td>{stu.name}</td>
                        <td>{stu.email}</td>
                        <td>{stu.phone}</td>
                        <td>{stu.address}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentData;
