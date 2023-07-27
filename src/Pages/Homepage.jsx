import React, { useState } from 'react';
import SideOne from '../Components/SideOne';
import SideTwo from '../Components/SideTwo';

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="side_layout" className={`flex flex-col md:flex-row ${darkMode ? 'dark-background' : 'light-background'}`}>
      <SideOne darkMode={darkMode} setDarkMode={setDarkMode} />
      <SideTwo darkMode={darkMode} />
    </div>
  );
}

export default Homepage;
