import { useEffect, useState } from "react";
import { getWorkouts } from "../../services/workoutService";
import "./Workout.css";
import { Workout } from "./Workout";
import { useNavigate } from "react-router-dom";
import { WorkoutAthlete } from "./WorkoutAthlete";

export const WorkoutListAthlete = ({ currentUser }) => {
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();

  var getAndSetWorkouts = () => {
    getWorkouts().then((workoutsArray) => {
      setWorkouts(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetWorkouts();
  }, [currentUser]);

  return (
    <div className="workouts-container">
      <h2>All Workouts</h2>
      <article className="workouts">
        {workouts.map((workout) => {
          return (
            <WorkoutAthlete
              workout={workout}
              key={workout.id}
              getAndSetWorkouts={getAndSetWorkouts}
              currentUser={currentUser}
            />
          );
        })}
      </article>
    </div>
  );
};
