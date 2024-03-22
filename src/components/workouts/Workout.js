import { useNavigate } from "react-router-dom";
import { deleteWorkout } from "../../services/workoutService";
import { getWorkouts } from "../../services/workoutService";
import "./Workout.css";
import { useWorkouts } from "../../services/workoutEditService";
import { useEffect } from "react";

export const Workout = ({ workout, getAndSetWorkouts }) => {
  const navigate = useNavigate();

  const handleDelete = (workoutid) => {
    deleteWorkout(workoutid).then(() => {
      navigate(`/workouts`);
    });
  };

  useEffect(() => {
    getAndSetWorkouts();
  }, []);

  // const handleEdit = () => {};

  return (
    <section className="workout" key={workout}>
      <header>{workout.name}</header>
      <div>{workout.description}</div>
      <footer key={workout.id}>
        <div>Type: {workout.type}</div>
        <div className="btn-container" />
        {/* <button
          className="btn btn-secondary"
          onClick={() => {
            handleEdit;
          }}
        >
          Edit
        </button> */}
        <button
          className="btn btn-warning"
          onClick={handleDelete}
          workout={workout}
        >
          Delete
        </button>
      </footer>
    </section>
  );
};
