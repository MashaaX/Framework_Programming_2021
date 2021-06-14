import React, { Component } from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from "reactstrap";

export default class Student extends Component {
  render() {
    return (
      <div className="App container mt-4">
        <h4 className="font-weight-bold">Students Registration</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Student </td>
              <td>One</td>
              <td>Student One</td>
              <td>student@gmal.com</td>
              <td>9876543210</td>
              <td>
                <Button color="success" size="sm" className="mr-3">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
