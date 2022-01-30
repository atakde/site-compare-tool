import { useRef } from "react";
import "./Header.css";
import { BsPhone } from "react-icons/bs";
import {
  MdDesktopMac,
  MdSend,
  MdOutlineCompareArrows,
  MdTabletMac,
} from "react-icons/md";

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
        <MdOutlineCompareArrows className="icons" />
        <input
          type="text"
          ref={secondUrlInput}
          placeholder="Please enter second url"
        />
        <MdSend
          className="icons buttons"
          onClick={() => props.handleButtonClick(firstUrlInput, secondUrlInput)}
        />
        <p className="resize-container">
          <BsPhone
            className="icons buttons"
            onClick={() => props.handleViewMode("mobile")}
          />
          <MdTabletMac
            className="icons buttons"
            onClick={() => props.handleViewMode("tablet")}
          />
          <MdDesktopMac
            className="icons buttons"
            onClick={() => props.handleViewMode("desktop")}
          />
        </p>
      </div>
    </div>
  );
};

export default Header;
