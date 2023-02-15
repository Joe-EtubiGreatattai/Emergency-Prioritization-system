import style from "../styles/notificationContainer.module.css";

export const NotificationScreen = () => {
  return (
    <div className={style.notificatonContainer}>
      <span>Your number on the queue is:</span>
      <p>6</p>
    </div>
  );
};
