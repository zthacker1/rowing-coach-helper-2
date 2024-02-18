import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../services/workoutService";
import "./Workout.css";
import { Workout } from "./Workout";

export const WorkoutList = ({ currentUser }) => {
  const [allWorkouts, setAllWorkouts] = useState([]);

  getAndSetWorkouts = () => {
    getAllWorkouts().then((workoutsArray) => {
      setAllWorkouts(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetWorkouts();
  }, [currentUser]);

  return (
    <div className="workouts-container">
      <h2>Workouts</h2>
      <article className="workouts">
        {allWorkouts.map((workout) => {
          return (
            <Workout
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
