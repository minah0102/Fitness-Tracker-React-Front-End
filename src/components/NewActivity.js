import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createActivity } from "../api";

const NewActivity = ({ token }) => {
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

  const nameChange = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  };

  const descriptionChange = (evt) => {
    evt.preventDefault();
    setDescription(evt.target.value);
  };

  return (
    <>
      <h1>Create a New Activity</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br></br>
          <input type="text" value={name} onChange={nameChange}></input>
        </label>
        <br></br>
        <label>
          Description: <br></br>
          <input type="text" value={description} onChange={descriptionChange}></input>
        </label>
        <br></br>
        <br></br>
        <button type="submit">Create!</button>
      </form>
    </>
  );
};
export default NewActivity;