import { useRef } from "react";
import "./Header.css";

const Header = (props) => {
  const firstUrlInput = useRef();
  const secondUrlInput = useRef();
  return (
    <div className="header">
      <div className="url-container">
        <input
          type="text"
          ref={firstUrlInput}
          placeholder="Please enter first url"
        />
        <span>vs</span>
        <input
          type="text"
          ref={secondUrlInput}
          placeholder="Please enter second url"
        />
        <button
          onClick={() => props.handleButtonClick(firstUrlInput, secondUrlInput)}
        >
          GO
        </button>
      </div>
    </div>
  );
};

export default Header;
