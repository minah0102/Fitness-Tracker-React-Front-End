import React from 'react';

import { Link } from "react-router-dom";

const Activities = ({ activities, currentUser }) => {
  return (
    <div id="activities">
      <h3>
        {currentUser ? (
          <Link to="AddNewActivity">
            <button>Add New Activity</button>
          </Link>
        ) : null}
      </h3>
      <h4>Id - Name - Description</h4>
      {activities ? (
        activities.map((a) => (
          <div key={a.id}>
            <h5>
              {a.id} - {a.name} - {a.description}
            </h5>
          </div>
        ))
      ) : null}
    </div>
  )
}

export default Activities;