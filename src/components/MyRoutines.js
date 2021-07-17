// import React, { Fragment, useContext, useEffect, useState } from "react";
// import { Row, Col, Button, Container } from "react-bootstrap";
// import { NavLink, useHistory } from "react-router-dom";
// import { UserContext } from "..";
// import {
//   fetchDataToken,
//   addActivity,
//   deleteActivityFromRoutine,
//   deleteRoutine
// } from "../api";

// const MyRoutines = () => {
//   const {
//     setActivityToUpdate,
//     setRoutine,
//     currentUser,
//     token,
//     activities,

//   } = useContext(UserContext);

//   const [myRoutines, setMyRoutines] = useState([]);
//   const [duration, setDuration] = useState("");
//   const [count, setCount] = useState("");
//   const [activity, setActivity] = useState("");


//   const history = useHistory();

//   useEffect(async () => {
//     const data = await fetchDataToken(`users/${currentUser}/routines`, token);

//     if (data) {
//       setMyRoutines(data);
//     }
//   }, []);

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };
//   const handleCountChange = (e) => {
//     setCount(e.target.value);
//   };
//   const handleActivityChange = (e) => {
//     setActivity(e.target.value);
//   };

//   const addActivityToRoutineMaker = (routineId) => {
//     return async function addActivityToRoutine(e) {
//       e.preventDefault();

//       const response = await addActivity(routineId, activity, duration, count);
//       const a = activities.find((a) => a.id === response.activityId);
//       const addedActivity = { ...act };

//       addedActivity.duration = response.duration;
//       addedActivity.count = response.count;
//       addedActivity.routineId = response.routineId;
//       addedActivity.routineActivityId = response.id;

//       const myNewRoutine = myRoutines.map((r) => {
//         if (r.id === addedActivity.routineId) {
//           r.activities.push(addedActivity);
//         }
//         return r;
//       });
//       setMyRoutines(myNewRoutine);
//     };
//   }

//   async function destroyAct(raId, aName, token) {
//     const d = confirm(`Delete ${aName}?`);
//     if (d) {
//       const response = await deleteActivityFromRoutine(raId, token);
//       const act = activities.find((act) => act.id === response.activityId);
//       const deletedActivity = { ...act };

//       deletedActivity.duration = response.duration;
//       deletedActivity.count = response.count;
//       deletedActivity.routineId = response.routineId;
//       deletedActivity.routineActivityId = response.id;

//       const newMyRout = myRoutines.map((rout) => {
//         if (rout.id === deletedActivity.routineId) {
//           rout.activities = rout.activities.filter(
//             (act) => act.id !== deletedActivity.id
//           );
//         }

//         return rout;
//       });

//       setMyRoutines(newMyRout);
//     }
//   }

//   function destroyRoutine(rId, rName, token) {
//     const d = confirm(`Delete ${rName}?`);
//     if (d) {
//       deleteRoutine(rId, token);
//       history.push("/Deleted");
//     }
//   }

//   function toUpdateRoutineMaker(rId) {
//     return function toUpdateRoutine(evt) {
//       evt.preventDefault();
//       setRoutine(rId);
//       history.push("/UpdateRoutine");
//     };
//   }
//   function updateCountDurationMaker(act) {
//     return function updateCountDuration(evt) {
//       evt.preventDefault();
//       setActivityToUpdate(act);
//       history.push("/UpdateActivity");
//     };
//   }



//   return (
//     <>
//       <div id="my-routines">
//         {/* <Container style={{ margin: "0.5rem", padding: "0.5rem" }}>
//           <Row>
//             <Col><h1>My Routines</h1></Col>
//           </Row>
//         </Container> */}
//         <h1>My Routines</h1>

//         {myRoutines.map((r) => {
//           <div key={r.id}>
//             <h2>
//               Name: {r.name}
//             </h2>
//             <h3>
//               Creator: {r.creatorName}<br />
//               Goal: {r.goal}
//               <button type="button" onClick={toUpdateRoutineMaker(r)}>
//                 Update {r.name}
//               </button>
//             </h3>
//             <h4>Included Activities:</h4>
//             {r.activities.map((a) => (
//               <Fragment key={a.id}>
//                 <h4>
//                   Name: {a.name}
//                   Duration: {a.duration}
//                   Count: {a.count}
//                   <button onClick={updateCountDurationMaker(a)}>Update</button>
//                   <button
//                     onClick={() =>
//                       destroyAct(a.routineActivityId, a.name, token)
//                     }
//                   >
//                     Delete
//                   </button>
//                 </h4>
//                 <h5 key={a.name}>
//                   ⫷{a.description}⫸
//                 </h5>
//               </Fragment>
//             ))}
//             <form onSubmit={addActivityToRoutineMaker(r.id)}>
//               <label>
//                 Activity to Add:
//                 <select onChange={handleActivityChange} defaultValue="none">
//                   <option value="none" disabled hidden>Select an Option</option>
//                   {activities.map((e) => (
//                     <option key={a.id} value={a.id}>{a.name} - {a.description}</option>
//                   ))}
//                 </select>
//               </label>
//               <label>
//                 Count:
//                 <input type="number" onChange={handleCountChange} />
//               </label>
//               <button>Add Activity to {r.name}</button>
//             </form>

//             <button onClick={() => destroyRoutine(r.id, r.name, token)}>Delete Routine</button>

//           </div>
//         })}
//       </div>
//     </>
//   );

// };

// export default MyRoutines;

// import React, { Fragment, useContext, useEffect, useState } from "react";
// import { fetchDataToken } from "../api";
// import { useHistory } from "react-router-dom";
// import { addActivity, deleteActivityFromRoutine } from "../api";
// import { deleteRoutine } from "../api";
// import { UserContext } from "..";

// const MyRoutines = () => {
//   const {
//     setActivityToUpdate,
//     setRoutine,
//     currentUser,
//     token,
//     activities,
//   } = useContext(UserContext);

//   const [myRoutines, setMyRoutines] = useState([]);
//   const [duration, setDuration] = useState("");
//   const [count, setCount] = useState("");
//   const [activity, setActivity] = useState("");

//   const history = useHistory();

//   useEffect(async () => {
//     const data = await fetchDataToken(`users/${currentUser}/routines`, token);

//     if (data) {
//       setMyRoutines(data);
//     }
//   }, []);
//   function durChange(evt) {
//     setDuration(evt.target.value);
//   }
//   function couChange(evt) {
//     setCount(evt.target.value);
//   }
//   function actChange(evt) {
//     setActivity(evt.target.value);
//   }

//   function addActivityToRoutineMaker(rId) {
//     return async function addActivityToRoutine(evt) {
//       evt.preventDefault();
//       const response = await addActivity(rId, activity, duration, count);
//       const act = activities.find((act) => act.id === response.activityId);
//       const addedActivity = { ...act };
//       addedActivity.duration = response.duration;
//       addedActivity.count = response.count;
//       addedActivity.routineId = response.routineId;
//       addedActivity.routineActivityId = response.id;

//       const newMyRout = myRoutines.map((rout) => {
//         if (rout.id === addedActivity.routineId) {
//           rout.activities.push(addedActivity);
//         }
//         return rout;
//       });
//       setMyRoutines(newMyRout);
//     };
//   }
//   async function destroyAct(raId, aName, token) {
//     const d = confirm(`Delete ${aName}?`);
//     if (d) {
//       const response = await deleteActivityFromRoutine(raId, token);
//       const act = activities.find((act) => act.id === response.activityId);
//       const deletedActivity = { ...act };

//       deletedActivity.duration = response.duration;
//       deletedActivity.count = response.count;
//       deletedActivity.routineId = response.routineId;
//       deletedActivity.routineActivityId = response.id;

//       const newMyRout = myRoutines.map((rout) => {
//         if (rout.id === deletedActivity.routineId) {
//           rout.activities = rout.activities.filter(
//             (act) => act.id !== deletedActivity.id
//           );
//         }

//         return rout;
//       });

//       setMyRoutines(newMyRout);
//     }
//   }
//   function destroyRoutine(rId, rName, token) {
//     const d = confirm(`Delete ${rName}?`);
//     if (d) {
//       deleteRoutine(rId, token);
//       history.push("/Deleted");
//     }
//   }

//   function toUpdateRoutineMaker(rId) {
//     return function toUpdateRoutine(evt) {
//       evt.preventDefault();
//       setRoutine(rId);
//       history.push("/UpdateRoutine");
//     };
//   }
//   function updateCountDurationMaker(act) {
//     return function updateCountDuration(evt) {
//       evt.preventDefault();
//       setActivityToUpdate(act);
//       history.push("/UpdateActivity");
//     };
//   }
//   return (
//     <>
//       <h2>My Routines</h2>

//       {myRoutines.map((rou) => (
//         <div key={rou.id}>
//           <h3>
//             Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
//             <button type="button" onClick={toUpdateRoutineMaker(rou)}>
//               Update {rou.name}
//             </button>
//           </h3>

//           <h4 style={{ textIndent: 20 }}>Included Activities:</h4>
//           {rou.activities.map((act) => (
//             <Fragment key={act.id}>
//               <h4 style={{ textIndent: 40 }}>
//                 Name: {act.name} | Duration: {act.duration} | Count: {act.count}
//                 <button onClick={updateCountDurationMaker(act)}>Update</button>
//                 <button
//                   onClick={() =>
//                     destroyAct(act.routineActivityId, act.name, token)
//                   }
//                 >
//                   Delete
//                 </button>
//               </h4>
//               <h5 key={act.name} style={{ textIndent: 60 }}>
//                 ⫷{act.description}⫸
//               </h5>
//             </Fragment>
//           ))}
//           <form onSubmit={addActivityToRoutineMaker(rou.id)}>
//             <label>
//               Activity to Add:
//               <select
//                 style={{ width: "130px" }}
//                 onChange={actChange}
//                 defaultValue="none"
//               >
//                 <option value="none" disabled hidden>
//                   Select an Option
//                 </option>
//                 {activities.map((act) => (
//                   <option key={act.id} value={act.id}>
//                     {act.name} - {act.description}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//               Duration:
//               <input
//                 type="number"
//                 style={{ width: "50px" }}
//                 onChange={durChange}
//               ></input>
//             </label>
//             <label>
//               Count:
//               <input
//                 type="number"
//                 style={{ width: "50px" }}
//                 onChange={couChange}
//               ></input>
//             </label>
//             <button>Add Activity to {rou.name}</button>
//           </form>

//           <button
//             type="button"
//             onClick={() => destroyRoutine(rou.id, rou.name, token)}
//           >
//             Delete Routine
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default MyRoutines;

import React, { useContext, useEffect } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { UserContext } from "..";
import { useHistory } from "react-router";
import { fetchDataToken, deleteRoutine } from "../api";

const MyRoutines = () => {
  const { token, currentUser, myRoutines, setMyRoutines } = useContext(UserContext);
  const history = useHistory();

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