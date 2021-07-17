
import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { UserContext } from "..";
import { fetchDataToken, deleteRoutine } from "../api";

const MyRoutines = () => {
  const { token, currentUser, myRoutines, setMyRoutines } = useContext(UserContext);

  useEffect(async () => {
    const data = await fetchDataToken(`users/${currentUser}/routines`, token);

    if (data) {
      setMyRoutines(data);
    }
  }, []);

  const deleteRoutineHandler = (routineId, routineName, token) => {
    const d = confirm(`Delete ${routineName}?`);
    if (d) {
      deleteRoutine(routineId, routineName, token);
    }
  }

  return (
    <div>
      <h1 style={{ margin: "0.7rem" }}>My Routines</h1>
      {myRoutines ? (
        myRoutines.map((routine) => {
          const { id, name, goal, creatorName } = routine;
          return (
            <Card style={{ width: '30rem', margin: "0.7rem" }} key={id}>
              <Card.Body>
                <Card.Title>Routine Name: {name}</Card.Title>
                <Card.Text>Goal: {goal}</Card.Text>
                <Card.Text>Creator: {creatorName}</Card.Text>
                <Button>Add Activity</Button>
                <Button variant="success">Update</Button>
                <Button variant="danger" onClick={() => deleteRoutineHandler(id, name, token)}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })
      ) : null}
      <Card style={{ width: '30rem', margin: "0.7rem" }}>
        <Card.Body>
          <Card.Title>Routine Name: </Card.Title>
          <Card.Text>Goal: </Card.Text>
          <Card.Text>Creator: </Card.Text>
          <Button>Add Activity</Button>
          <Button variant="success">Update</Button>
          <Button variant="danger" onClick={deleteRoutineHandler}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyRoutines;