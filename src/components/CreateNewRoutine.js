import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "..";
import { Form, Button } from "react-bootstrap";

import { addRoutine } from "../api"

const mystyle = {
  padding: "1rem",
  margin: "1rem",
  display: "flex",
  justifyContent: "center"
};

const buttonStyle = {
  padding: "0.6rem",
  marginRight: " 0.5rem",
  borderRadius: "15px",
  backgroundColor: "#ccccff",
  color: "black",
  border: "none",
  margin: "0.7rem"
}

const CreateNewRoutine = () => {
  const { token } = useContext(UserContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  function clearInput() {
    setName("");
    setGoal("");
    setIsPublic(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addRoutine(name, goal, isPublic, token);

    if (!response.error) {
      clearInput();
      history.push("/myroutines");
    } else {
      alert(response.message);
    }
  };

  const nameChangeHandler = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  };
  
  const goalChangeHandler = (evt) => {
    evt.preventDefault();
    setGoal(evt.target.value);
  };

  const publicChangeHandler = (evt) => {
    console.log(evt.target.checked);
    setIsPublic(evt.target.checked);
  };

  return (
    <div style={mystyle} className="newRoutine">
      <Form>
        <h3 style={{ margin: "0.7rem" }}>Create a New Routine</h3>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formNewRoutineName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="new routine name"
            value={name}
            onChange={nameChangeHandler}
          />
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formNewRoutineGoal">
          <Form.Label>Goal:</Form.Label>
          <Form.Control
            type="text"
            placeholder="new goal"
            value={goal}
            onChange={goalChangeHandler}
          />
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formNewRoutineCheckbox">
          <Form.Check
            type="checkbox"
            label="Make it Public?"
            value={isPublic}
            onChange={publicChangeHandler}
          />
        </Form.Group>

        <Button style={buttonStyle} type="submit" onClick={handleSubmit}>Create</Button>

      </Form>
    </div>
  );


};
export default CreateNewRoutine;