import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// These imports won't work until you fix ./components/index.js
import {
  Title,
  Home,
  MenuTab
} from './components';

const App = () => {
  /**
   * We are at the App level component, which is top-most. Any state which needs to be shared between immediate children should
   * be made here, so create state pairs using useState() for:
   * 
   * searchResults, setSearchResults (default should be this object:  {info: {}, records: []} )
   * featuredResult, setFeaturedResult (default should be null)
   * isLoading, setIsLoading (default should be false)
   */


  return <div className="app">
    <Title />
    <MenuTab />
    <Home />
    {/* <Preview /> needs props for searchResults, setIsLoading and setSearchResults (clicking prev/next buttons), and setFeaturedResult (clicking a preview) */}
    {/* <Routines /> */}
    {/* <Feature /> needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
    {/* <Activities
    //{...{featuredResult, setIsLoading, searchResults}}
    /> */}
    {/* <Loading /> is static, but should only render when isLoading is true */}
    {/* <MyRoutines /> */}
    
    {// isLoading ? <Loading  /> : null 
    }
    {/* use a ternary and render null if isLoading is false */}
  </div>
}


ReactDOM.render(<App />, document.getElementById("app"));