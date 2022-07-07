import React from "react";
import "./App.css";
import { CreditEstimate } from "./features/CreditEstimate";

export const App: React.FC = () => {
  return (
    <div className="App">
      <CreditEstimate />
    </div>
  );
}

export default App;
