import { useState } from "react";
import style from "../styles/input.module.css";

export const InputField = (props) => {
  const [tip, setTip] = useState(false);
  const { handleInputChange } = props;
  return (
    <div className={style.inputContainer}>
      <label>{props.label}</label>
      <input
        type={props.type}
        required
        value={props.value}
        name={props.name}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={props.placeholder}
        onFocus={() => setTip(true)}
        onBlur={() => setTip(false)}
      />
      {tip && props.tipText && <span>{props.tipText}</span>}
    </div>
  );
};
