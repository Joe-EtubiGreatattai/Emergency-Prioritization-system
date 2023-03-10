import { InputField } from "./InputField";
import style from "../styles/form.module.css";
import { UserMedical } from "../svg";
import { useState } from "react";

export const AppointmentForm = () => {
  const [vitalSigns, setVitalSigns] = useState("");
  const [age, setAge] = useState("");
  const [primarySymptom, setPrimarySyptom] = useState("");
  const [medHistory, setMedHistory] = useState("");
  return (
    <div className={style.formContainer}>
      <div>
        <UserMedical height={50} width={50} />
        <p>Fill the form correctly for better result</p>
      </div>
      <form>
        <InputField
          type="text"
          label="Primary symptoms"
          placeholder="headache"
          value={primarySymptom}
          handleInputChange={(e) => setPrimarySyptom(e)}
        />
        <InputField
          type="number"
          label="Age"
          placeholder="67"
          value={age}
          handleInputChange={(e) => setAge(e)}
        />
        <InputField
          type="text"
          label="Medical history"
          placeholder="i.e high blood pressure or asthma..."
          tipText="If patient doesn't have any, input 'none' "
          value={medHistory}
          handleInputChange={(e) => setMedHistory(e)}
        />
        <InputField
          type="text"
          label="Vital Signs"
          placeholder="BP: 120/80"
          value={vitalSigns}
          handleInputChange={(e) => {
            let value = e.replace(/\D/g, "");
            setVitalSigns(`BP: ${value}`);
          }}
        />
        <div className={style.btnContainer}>
          <button>Book appointment</button>
        </div>
      </form>
    </div>
  );
};
