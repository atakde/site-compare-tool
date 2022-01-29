import "./Main.css";

const Main = ({ firstUrl, secondUrl }) => {
  return (
    <div className="iframe-container">
      <div className="iframe-view">
        <iframe src={firstUrl}></iframe>
      </div>
      <div className="iframe-view">
        <iframe src={secondUrl}></iframe>
      </div>
    </div>
  );
};
export default Main;
