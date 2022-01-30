import "./Main.css";

const Main = ({ firstUrl, secondUrl, settings }) => {
  console.log(settings);
  return (
    <div className="iframe-container">
      <div className="iframe-view">
        <iframe
          src={firstUrl}
          height={settings.height}
          width={settings.width}
        ></iframe>
      </div>
      <div className="iframe-view">
        <iframe
          src={secondUrl}
          height={settings.height}
          width={settings.width}
        ></iframe>
      </div>
    </div>
  );
};
export default Main;
