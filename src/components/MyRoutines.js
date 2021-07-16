import React, { Fragment, useContext, useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { AddNewRoutine } from ".";
import { UserContext } from "..";
import {
  fetchDataToken,
  addActivity,
  deleteActivityFromRoutine,
  deleteRoutine
} from "../api";

const buttonStyle = {
  padding: "0.6rem",
  marginRight: "0.5rem",
  borderRadius: "15px",
  backgroundColor: "#ccccff",
  color: "black",
  border: "none",
}

const MyRoutines = () => {
  const {
    setActivityToUpdate,
    setRoutine,
    currentUser,
    token,
    activities,
    modalShow,
    setModalShow
  } = useContext(UserContext);

  const [myRoutines, setMyRoutines] = useState([]);
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const [activity, setActivity] = useState("");

  const history = useHistory();

  useEffect(async () => {
    const data = await fetchDataToken(`users/${currentUser}/routines`, token);

    if (data) {
      setMyRoutines(data);
    }
  }, []);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const addActivityToRoutineMaker = (routineId) => {
    return async function addActivityToRoutine(e) {
      e.preventDefault();

      const response = await addActivity(routineId, activity, duration, count);
      const a = activities.find((a) => a.id === response.activityId);
      const addedActivity = { ...act };

      addedActivity.duration = response.duration;
      addedActivity.count = response.count;
      addedActivity.routineId = response.routineId;
      addedActivity.routineActivityId = response.id;

      const myNewRoutine = myRoutines.map((r) => {
        if (r.id === addedActivity.routineId) {
          r.activities.push(addedActivity);
        }
        return r;
      });
      setMyRoutines(myNewRoutine);
    };
  }

  async function destroyAct(raId, aName, token) {
    const d = confirm(`Delete ${aName}?`);
    if (d) {
      const response = await deleteActivityFromRoutine(raId, token);
      const act = activities.find((act) => act.id === response.activityId);
      const deletedActivity = { ...act };

      deletedActivity.duration = response.duration;
      deletedActivity.count = response.count;
      deletedActivity.routineId = response.routineId;
      deletedActivity.routineActivityId = response.id;

      const newMyRout = myRoutines.map((rout) => {
        if (rout.id === deletedActivity.routineId) {
          rout.activities = rout.activities.filter(
            (act) => act.id !== deletedActivity.id
          );
        }

        return rout;
      });

      setMyRoutines(newMyRout);
    }
  }

  function destroyRoutine(rId, rName, token) {
    const d = confirm(`Delete ${rName}?`);
    if (d) {
      deleteRoutine(rId, token);
      history.push("/Deleted");
    }
  }

  function toUpdateRoutineMaker(rId) {
    return function toUpdateRoutine(evt) {
      evt.preventDefault();
      setRoutine(rId);
      history.push("/UpdateRoutine");
    };
  }
  function updateCountDurationMaker(act) {
    return function updateCountDuration(evt) {
      evt.preventDefault();
      setActivityToUpdate(act);
      history.push("/UpdateActivity");
    };
  }

  

  return (
    <>
      <div id="my-routines">
        <Container style={{margin: "0.5rem", padding: "0.5rem"}}>
        <Row>
          <Col><h1>My Routines</h1></Col>
          <Col md={{ span: 3, offset: 3 }}><Button style={buttonStyle} onClick={()=>setModalShow(true)}>Create New Routine</Button></Col>
        </Row>
      </Container>
      <AddNewRoutine 
      show={modalShow}
      onHide={()=>setModalShow(false)} />
        {myRoutines.map((r) => {
          <div key={r.id}>
            <h2>
              Name: {r.name}
            </h2>
            <h3>
              Creator: {r.creatorName}<br />
              Goal: {r.goal}
              <button type="button" onClick={toUpdateRoutineMaker(r)}>
                Update {r.name}
              </button>
            </h3>
            <h4>Included Activities:</h4>
            {r.activities.map((a) => (
              <Fragment key={a.id}>
                <h4>
                  Name: {a.name}
                  Duration: {a.duration}
                  Count: {a.count}
                  <button onClick={updateCountDurationMaker(a)}>Update</button>
                  <button
                    onClick={() =>
                      destroyAct(a.routineActivityId, a.name, token)
                    }
                  >
                    Delete
                  </button>
                </h4>
                <h5 key={a.name}>
                  ⫷{a.description}⫸
                </h5>
              </Fragment>
            ))}
            <form onSubmit={addActivityToRoutineMaker(r.id)}>
              <label>
                Activity to Add:
                <select onChange={handleActivityChange} defaultValue="none">
                  <option value="none" disabled hidden>Select an Option</option>
                  {activities.map((e) => (
                    <option key={a.id} value={a.id}>{a.name} - {a.description}</option>
                  ))}
                </select>
              </label>
              <label>
                Count:
                <input type="number" onChange={handleCountChange} />
              </label>
              <button>Add Activity to {r.name}</button>
            </form>

            <button onClick={() => destroyRoutine(r.id, r.name, token)}>Delete Routine</button>

          </div>
        })}
      </div>
    </>
  );

};

export default MyRoutines;