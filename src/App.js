import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");

  const handleButtonClick = (firstInput, secondInput) => {
    console.log("Button clicked!");
    setFirstUrl(firstInput.current.value);
    setSecondUrl(secondInput.current.value);
  };

  return (
    <div className="App">
      <Header handleButtonClick={handleButtonClick} />
      <Main firstUrl={firstUrl} secondUrl={secondUrl} />
    </div>
  );
};

export default App;
