import { useEffect, useState } from "react";
import { getAllAthletes } from "../../services/athleteService";
import "./Athlete.css";
import { Athlete } from "./Athlete";
import { getNonCoachUsers } from "../../services/userService";

export const AthleteList = () => {
  const [allAthletes, setAllAthletes] = useState([]);

  useEffect(() => {
    getNonCoachUsers().then((athletesArray) => {
      setAllAthletes(athletesArray);
    });
  }, []);

  return (
    <div className="athletes-container">
      <h2>Athletes</h2>
      <article className="workouts">
        {allAthletes.map((athleteObj) => {
          return <Athlete athlete={athleteObj} key={athleteObj.id} />;
        })}
      </article>
    </div>
  );
};
