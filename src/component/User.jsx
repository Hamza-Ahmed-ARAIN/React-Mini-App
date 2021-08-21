import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function Users() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data.json().then((result) => {
        console.warn("result", result);
        setuser(result.data);
      });
    });
  }, []);
  return (
    <>
      <h1>Listing here</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>salary</th>
            <th>Age</th>
          </tr>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.employee_name}</td>
              <td>{item.employee_salary}</td>
              <td>{item.employee_age}</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
}

export default Users;
