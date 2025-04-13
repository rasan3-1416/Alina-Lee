import { useContext } from "react";
import {
  ImFacebook,
  ImInstagram,
  ImPinterest,
  ImYoutube,
  ImTwitter,
} from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Social = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="ml-24 hidden lg:flex"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <ImFacebook size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            <ImTwitter size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blank">
            <ImPinterest size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <ImInstagram size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <ImYoutube size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
