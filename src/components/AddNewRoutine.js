import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";

import { addRoutine } from "../api";

const AddNewRoutine = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const history = useHistory();

  const clearInput = () => {
    setName("");
    setGoal("");
    setIsPublic(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addRoutine(name, goal, isPublic, token);

    if (!response.error) {
      clearInput();
      history.push("/MyRoutines");
    } else {
      alert(response.message);
    }
  };

  const nameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const goalChange = (e) => {
    e.preventDefault();
    setGoal(e.target.value);
  };
  const publicChange = (e) => {
    console.log(e.target.checked);
    setIsPublic(e.target.checked);
  };

  // return (
  //   <>
  //     <div id="add-new-routine">
  //       <form onSubmit={handleSubmit}>
  //         <label>
  //           Name: <br />
  //           <input type="text" value={name} onChange={nameChange} />
  //         </label>

  //         <label>
  //           Goal: <br />
  //           <input type="text" value={goal} onChange={goalChange} />
  //         </label>

  //         <label>
  //           Public Routine?<br />
  //           <label>
  //             Public
  //             <input type="checkbox" value={isPublic} onChange={publicChange} />
  //           </label>
  //         </label>

  //         <button type="submit">Create</button>
  //       </form>
  //     </div>
  //   </>
  // )

  return (
    <>
      <Form>
        <Form.Group controlId="formNewActivityName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formNewActivityGoal">
          <Form.Label>Goal:</Form.Label>
          <Form.Control type="text" placeholder="Enter goal" />
        </Form.Group>

        <Form.Group controlId="formNewActivityCheckbox">
          <Form.Check type="checkbox" label="Public Routine?" />
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
    </>
  )
}


export default AddNewRoutine;