import style from "../styles/card.module.css";

export const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.col1}>
        <img src="assets/med.png" alt="doctors" />
      </div>
      <div className={style.col2}>
        <p>For emergency</p>
        <span>
          Meetings with medical personel are prioritzed according to it's
          emergency
        </span>
      </div>
    </div>
  );
};
