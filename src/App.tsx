import React from "react";
import "./App.css";
import { Button } from "./shared/ui/Button";
import { Modal } from "./shared/ui/Modal";

function App() {
  return (
    <div className="App">
      <Modal visible className="bg-orange-300 min-w-500p" >
        Ne vazno
        <Button children="Continue"/>
      </Modal>
    </div>
  );
}

export default App;
