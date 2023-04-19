import style from "../styles/loader.module.css";

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
