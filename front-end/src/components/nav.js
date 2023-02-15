// import { Link } from "react-router-dom";
import style from "../styles/nav.module.css";
import {
  // CalenderOutline,
  HomeOutline,
  //  PersonOutline
} from "../svg";
export function Nav(props) {
  return (
    <ul className={style.container} onClick={props.handleOnClick}>
      <li>
        <span className={style.active}>
          <HomeOutline height={25} width={25} />
        </span>
      </li>
      {/* <li>
        <PersonOutline height={25} width={25} />
      </li>
      <li>
        <CalenderOutline height={25} width={25} />
      </li> */}
    </ul>
  );
}
