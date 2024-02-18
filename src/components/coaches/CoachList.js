import { useEffect, useState } from "react";
import { getAllCoaches } from "../../services/coachService";
import "./Coach.css";
import { Coach } from "./Coach";
import { getCoachUsers } from "../../services/userService";

export const CoachList = () => {
  const [allCoaches, setAllCoaches] = useState([]);

  useEffect(() => {
    getCoachUsers().then((coachesArray) => {
      setAllCoaches(coachesArray);
    });
  }, []);

  return (
    <div className="coaches-container">
      <h2>Coaches</h2>
      <article className="coaches">
        {allCoaches.map((coach) => {
          return <Coach coach={coach} key={coach.id} />;
        })}
      </article>
    </div>
  );
};
