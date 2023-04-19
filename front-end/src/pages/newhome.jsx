import { useEffect, useState } from "react";
import { AppointmentForm } from "../components/appointmentForm";
import { convertoXLSX } from "../utils/functions/excelexport";
import { Loader } from "../components/loader";

const Home = () => {
  const [allPatients, setAllpatient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);

  function upaloadPatienstData(formData) {
    setIsLoading(true);
    // setAllpatient(allPatients.push(formData));
    convertoXLSX(updateAllpatients(formData));
    setIsLoading(false);
  }

  function updateAllpatients(newPatient) {
    console.log(allPatients);
    const storedPatientsData = localStorage.getItem("patients")
      ? JSON.parse(localStorage.getItem("patients"))
      : allPatients;
    storedPatientsData.push(newPatient);
    setAllpatient(storedPatientsData);
    localStorage.setItem("patients", JSON.stringify(storedPatientsData));
    return storedPatientsData;
  }

  return (
    <div className="wrapper">
      {isLoading && <Loader />}
      <div className="form-wrapper">
        <AppointmentForm
          handleFormSubmit={(formData) => upaloadPatienstData(formData)}
        />
      </div>
      <div className="queue">
        <h3>Queue</h3>
        <ul>
          <li>
            <span className="name">
              01
              <span>Mike Brown</span>
            </span>
            <span className="symptom">(Headache)</span>
          </li>
          <li>
            <span className="name">
              01
              <span>Mike Brown</span>
            </span>
            <span className="symptom">(Headache)</span>
          </li>
          <li>
            <span className="name">
              01
              <span>Mike Brown</span>
            </span>
            <span className="symptom">(Headache)</span>
          </li>
          <li>
            <span className="name">
              01
              <span>Mike Brown</span>
            </span>
            <span className="symptom">(Headache)</span>
          </li>
          <li>
            <span className="name">
              01
              <span>Mike Brown</span>
            </span>
            <span className="symptom">(Headache)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
