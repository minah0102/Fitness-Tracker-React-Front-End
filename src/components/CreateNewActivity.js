import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "..";
import { createActivity } from "../api";

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

const CreateNewActivity = () => {
  const { token } = useContext(UserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  function clearInput() {
    setName("");
    setDescription("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createActivity(name, description, token);

    if (!response.error) {
      clearInput();
      history.push("/Activities");
    } else {
      alert(response.message);
    }
  };

  const nameChangeHandler = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  };
  const descriptionChangeHandler = (evt) => {
    evt.preventDefault();
    setDescription(evt.target.value);
  };

  return (
    <div style={mystyle} className="newActivity">
      <Form>
        <h3 style={{ margin: "0.7rem" }}>Create a New Activity</h3>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formNewActivityName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="new activity name"
            value={name}
            onChange={nameChangeHandler}
          />
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formNewActivityDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="new description"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </Form.Group>

        <Button style={buttonStyle} type="submit" onClick={handleSubmit}>Create</Button>
      </Form>
    </div>
  )
};
export default CreateNewActivity;