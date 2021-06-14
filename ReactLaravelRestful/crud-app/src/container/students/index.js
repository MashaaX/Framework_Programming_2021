import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddStudent from "./addStudents";
export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    this.getStudents();
  }
  getStudents() {
    axios.get("http://localhost:8000/api/students").then((response) => {
      if (response.status === 200) {
        this.setState({
          students: response.data.data ? response.data.data : [],
        });
      }
      if (
        response.data.status === "failed" &&
        response.data.success === false
      ) {
        this.setState({
          noDataFound: response.data.message,
        });
      }
    });
  }
  render() {
    const { noDataFound, students } = this.state;
    let studentsDetails = [];
    if (students.length) {
      studentsDetails = students.map((student) => {
        return (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.full_name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
              <Button color="success" className="mr-3" size="sm">
                Edit
              </Button>
              <Button color="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="App container mt-4">
        <h4 className="font-weight-bold">Students Registration</h4>
        <AddStudent />
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
          {students.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{studentsDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
}
