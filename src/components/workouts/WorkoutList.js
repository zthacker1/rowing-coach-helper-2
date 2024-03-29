import { useEffect, useState } from "react";
import { getWorkouts } from "../../services/workoutService";
import "./Workout.css";
import { Workout } from "./Workout";
import { useNavigate } from "react-router-dom";

export const WorkoutList = ({ currentUser }) => {
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();

  const getAndSetWorkouts = () => {
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
      <label>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/workouts/create");
          }}
        >
          Create New Workout
        </button>
      </label>
      <div></div>
      <article className="workouts">
        {workouts.map((workout) => {
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
