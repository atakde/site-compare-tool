import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");
  const [settings, setIframeSettings] = useState({
    width: "100%",
    height: "100%",
  });

  const handleButtonClick = (firstInput, secondInput) => {
    console.log("Button clicked!");
    setFirstUrl(firstInput.current.value);
    setSecondUrl(secondInput.current.value);
  };

  const handleViewMode = (modeName) => {
    if (modeName == "mobile") {
      setIframeSettings({
        width: "414px",
        height: "896px",
      });
    } else if (modeName == "desktop") {
      setIframeSettings({
        width: "100%",
        height: "100%",
      });
    } else if (modeName == "tablet") {
      setIframeSettings({
        width: "820",
        height: "1180",
      });
    }
  };

  return (
    <div className="App">
      <Header
        handleButtonClick={handleButtonClick}
        handleViewMode={handleViewMode}
      />
      <Main firstUrl={firstUrl} secondUrl={secondUrl} settings={settings} />
    </div>
  );
};

export default App;
