import style from "../styles/user.module.css";
export const User = (props) => {
  return (
    <div className={style.username}>
      <p>Hi {props.username} 👋</p>
    </div>
  );
};
