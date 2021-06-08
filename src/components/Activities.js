import React, { useEffect, useState } from 'react';

import {
  fetchAllActivities
} from '../api'

const Activities = ({
  name,
  description
}) => {
  return <div>
    <p>{name}</p>
    <p>{description}</p>
  </div>
}

export default Activities;