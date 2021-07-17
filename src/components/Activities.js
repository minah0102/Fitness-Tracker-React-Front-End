// import React, { useContext, useEffect } from 'react';
// import { UserContext } from '..';
// import { Link } from "react-router-dom";
// import { fetchData } from "../api";

// const Activities = () => {
//   const { activities, setActivities, user } = useContext(UserContext);

//   useEffect(async () => {
//     const data = await fetchData("Activities");
//     setActivities(data);
//   }, []);

//   return (
//     <div id="activities">
//       <h3>
//         {/* {user ? (
//           <Link to="AddNewActivity">
//             <button>Add New Activity</button>
//           </Link>
//         ) : null} */}
//       </h3>
//       <h4>Id - Name - Description</h4>
//       {/* {activities ? (
//         activities.map((a) => (
//           <div key={a.id}>
//             <h5>
//               {a.id} - {a.name} - {a.description}
//             </h5>
//           </div>
//         ))
//       ) : null} */}

//       {activities && activities ? (
//         activities.map((activity) => {
//           const { id, name, description } = activity;
//           <div key={activity.id}>
//             <h5>
//               {activity.id} - {activity.name} - {activity.description}
//             </h5>
//           </div>
//         })
//       ) : null}
//     </div>
//   )
// }

// export default Activities;

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
      <Card style={{margin: "0.7rem"}} key={act.id}>
        <Card.Body>
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