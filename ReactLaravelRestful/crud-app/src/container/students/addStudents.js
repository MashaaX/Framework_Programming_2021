import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class addStudents extends Component {
  render() {
    return (
      <div>
        <Button className="float-right mb-4" color="primary">
          Add Student
        </Button>
        <Modal>
          <ModalHeader>Add new Student</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input id="first_name" name="first_name" />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input id="last_name" name="last_name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" name="email" />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input id="phone" name="phone" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"> Add </Button>
            <Button color="secondary"> Cancel </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
