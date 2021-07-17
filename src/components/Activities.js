import React, { useContext } from "react";
import { UserContext } from "..";
import { Card } from "react-bootstrap";
import { addActivity } from "../api";
import { id } from "postcss-selector-parser";

const Activities = () => {
  const { activities, user } = useContext(UserContext);

  return (
    <>
    <h3 style={{margin: "0.7rem"}}>Activities</h3>
      {activities.map((act) => (
      <Card style={{ margin: "0.7rem"}} key={act.id}>
        <Card.Body  style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
          <Card.Title>Id:</Card.Title>
          <Card.Text>{act.id}</Card.Text>
          <Card.Title>Name:</Card.Title>
          <Card.Text>{act.name}</Card.Text>
          <Card.Title>Description:</Card.Title>
          <Card.Text>{act.description}</Card.Text>
        </Card.Body>
      </Card>
      ))}
    </>
  );
};

export default Activities;