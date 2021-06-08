import React from 'react';
import {
  Home,
  Routines,
  Activities
} from './index';

// redirectToHome = () => {
//   return Home;
// }

// redirectToActivities = () => {
//   return Activities;
// }

const MenuTab = () => {
  return <div id="menu-tab">
    <button onClick={Home}>Home</button>
    <button>Routines</button>
    <button onClick={Activities}>Activities</button>
  </div>
};

export default MenuTab;