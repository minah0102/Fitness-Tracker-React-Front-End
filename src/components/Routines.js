import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "..";
import { Row, Col, Card, Button } from "react-bootstrap";
import { fetchData } from "../api";

const Routine = () => {
  const { routine } = useContext(UserContext);
  const [routines, setRoutines] = useState([]);

  useEffect(async () => {
    const data = await fetchData("Routines");

    setRoutines(data);
  }, []);

  // return (
  //   <div id="routines">
  //     {routines ? (routines.map((routine) => {
  //       const { name, creatorName, goal, activities } = routine;
  //       return (
  //         <div key={routine.id} className="routine">
  //           <h2>
  //             Name: {name}
  //           </h2>
  //           <h3>Creator: {creatorName}</h3>
  //           <h3>Goal: {goal}</h3><br/>
  //           <div id="routine-activities">
  //             <b>Activities for this routine:</b>
  //             {activities.map((activity) => {
  //               const { description, duration, count } = activity;
  //               return (
  //                 <div key={activity.routineActivityId}>
  //                   <p><b>Description: </b>{description}</p>
  //                   <p><b>Duration: </b>{duration}</p>
  //                   <p><b>Count: </b>{count}</p><br/>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       );
  //     })) : null}
  //   </div>
  // );

  return (
    <>
      <div style={{margin: "0.5rem", padding: "0.5rem"}}>
        <Row>
          <Col><h1>Routines</h1></Col>
        </Row>
      </div>
      <div>
        <Card className="routine-card">
          {routines ? (routines.map((routine => {
            const { name, creatorName, goal, activities } = routine;
            return (
              <Card.Body key={routine.id} className="routine">
                <Card.Title>Name: {name}</Card.Title>
                <Card.Subtitle>Creator: {creatorName}</Card.Subtitle>
                <Card.Subtitle>Goal: {goal}</Card.Subtitle>
                <br></br>
                <div className="routine-activities">
                  <Card.Text style={{ fontSize: "17px", fontWeight: "bold" }}>Activities for this routine:</Card.Text>
                  {activities.map((activity) => {
                    const { description, duration, count } = activity;
                    return (
                      <Card.Text key={activity.routineActivityId}>
                        <p><b>Description: </b>{description}</p>
                        <p><b>Duration: </b>{duration}</p>
                        <p><b>Count: </b>{count}</p><br />
                      </Card.Text>
                    );
                  })}
                </div>
              </Card.Body>
            );
          }))) : null}
        </Card>
      </div>
    </>
  )
};

export default Routine;
