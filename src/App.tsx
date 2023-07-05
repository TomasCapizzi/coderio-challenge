import './Styles/main.scss';

import Home from "./Pages/Home";
import React from "react";
import { SelectionsContextProvider } from "./Context/SelectionsContext";

function App() {
  return (
    <SelectionsContextProvider>
      <Home/>
    </SelectionsContextProvider>
  );
}

export default App;
