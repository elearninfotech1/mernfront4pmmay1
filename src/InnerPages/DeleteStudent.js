import React, { useEffect, useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const DeleteStudent = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`https://github.com/elearninfotech1/mernfront4pmmay/student`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        alert("Unable to Fetch Student Data");
      });
  });
  const deletStudentData = (sid) => {
    axios
      .delete(
        `https://github.com/elearninfotech1/mernfront4pmmay/student/${sid}`
      )
      .then((res) => {
        alert("Student Deleted Suc...");
      })
      .catch((err) => {
        alert("Unable to Delete Student Data");
      });
  };
  return (
    <main>
      <section className={innerstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Delete Student</h1>
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
                    <th></th>
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
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => deletStudentData(stu._id)}
                          >
                            🚫
                          </Button>
                        </td>
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

export default DeleteStudent;
