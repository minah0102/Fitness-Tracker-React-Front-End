import React, { useState, useEffect } from "react";
import axios from "axios";

const Routines = ({ routinesList }) => {
    //   const [routines, setRoutines] = useState([]);
  
    //   useEffect(() => {
    //     axios
    //       .get(`${BASE}/routines`)
    //       .then((res) => {
    //         setRoutines(res.data);
    //       })
    //       .catch((error) => console.error(error, "Error retrieving routines"));
    //   }, []);
  
    return (
      <div className="all-routines">
        {routinesList.map((routine) => {
          const { name, creatorName, goal, activities } = routine;
          console.log(routine.activities);
          return (
            <div key={routine.id} className="routine">
              <h3>
                {name} by {creatorName}
              </h3>
              <h5>Goal: {goal}</h5>
              <div id="routine-activities">
                <b>Activities for this routine:</b>
                {activities.map((activity) => {
                  const { description, duration, count } = activity;
                  return (
                    <div key={activity.routineActivityId}>
                      <p>Description: {description}</p>
                      <p>Duration: {duration}</p>
                      <p>Count: {count}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Routines;