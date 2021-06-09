import React, { useState, useEffect } from "react";
import { fetchData } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(async () => {
    const data = await fetchData("Routines");

    setRoutines(data);
  }, []);

  return (
    <div id="routines">
      {routines ? (routines.map((routine) => {
        const { name, creatorName, goal, activities } = routine;
        console.log(routine.activities);
        return (
          <div key={routine.id} className="routine">
            <h2>
              {name} by {creatorName}
            </h2>
            <h3>Goal: {goal}</h3><br/>
            <div id="routine-activities">
              <b>Activities for this routine:</b>
              {activities.map((activity) => {
                const { description, duration, count } = activity;
                return (
                  <div key={activity.routineActivityId}>
                    <p><b>Description: </b>{description}</p>
                    <p><b>Duration: </b>{duration}</p>
                    <p><b>Count: </b>{count}</p><br/>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })) : null}
    </div>
  );

  // return (
  //   <>
  //     <h1>All Public Routines.</h1>
  //     {routines.map((rou) => (
  //       <div key={rou.id}>
  //         <h2>
  //           Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
  //         </h2>
  //         <>
  //           <h3 style={{ textIndent: 20 }}>Included Activities:</h3>
  //           {rou.activities.map((act) => (
  //             <h4 key={act.id} style={{ textIndent: 40 }}>
  //               Name: {act.name} | Duration: {act.duration} | Count: {act.count}
  //             </h4>
  //           ))}
  //         </>
  //       </div>
  //     ))}
  //   </>
  // );
};

export default Routines;