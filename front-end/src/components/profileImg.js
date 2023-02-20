import style from "../styles/profileImage.module.css";
export const ProfileImage = (props) => {
  return (
    <div className={style.imgContainer}>
      <img src={props.src} alt="person" />
    </div>
  );
};
