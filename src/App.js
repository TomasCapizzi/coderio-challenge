import React from "react";
import Footer from "./Components/Footer";
import TimelineContainer from "./Components/TimelineContainer";
import './Styles/main.scss';
import { SelectionsContextProvider } from "./Context/SelectionsContext";

function App() {
  return (
    <SelectionsContextProvider>
      <div className="App">
        <TimelineContainer/>
        <Footer/>
      </div>
    </SelectionsContextProvider>
  );
}

export default App;
