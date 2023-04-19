import { NotificationOutline } from "../svg";
import style from "../styles/notification.module.css";

export const Notification = (props) => {
  return (
    <div className={style.notification} onClick={props.handleOnClick}>
      <span className={style.dot}></span>
      <NotificationOutline height="100%" width="100%" />
    </div>
  );
};
