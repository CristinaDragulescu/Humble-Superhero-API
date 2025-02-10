import "./App.css";
import SuperheroTable from "./components/SuperheroTable";
import AddSuperheroButton from "./components/AddSuperheroButton";
import AddSuperheroModal from "./components/AddSuperheroModal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [refreshSignal, setRefreshSignal] = useState(false);

  //toggle the refreshSignal which triggers a re-fetch in the table with superheroes
  const triggerRefresh = () => {
    setRefreshSignal((prev) => !prev);
  };

  return (
    <div className="App">
      <AddSuperheroButton onClick={() => setModalOpen(true)} />
      <SuperheroTable refreshSignal={refreshSignal} />
      <AddSuperheroModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        triggerRefresh={triggerRefresh}
      />
    </div>
  );
}

export default App;
