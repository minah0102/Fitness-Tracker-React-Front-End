import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  Title,
  Home,
  MenuTab,
  Activities
} from './components';

const App = () => {

  //const [user, setUser] = useState(null);

  return <div className="app">
    <Title />
    <MenuTab />
    <Home />
    {/* <Routines /> */}
    {/* <Feature /> needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
    <Activities
    //{...{featuredResult, setIsLoading, searchResults}}
    />
    {/* <MyRoutines /> */}
    
    {// isLoading ? <Loading  /> : null 
    }
    {/* use a ternary and render null if isLoading is false */}
  </div>
}


ReactDOM.render(<App />, document.getElementById("app"));