import { useNavigate } from "react-router-dom";

export const Workout = ({ workout, currentUser, getAndSetWorkouts }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    getAndSetWorkouts();
  };

  return (
    <section className="workout" key={workout.id}>
      <header>{workout.name}</header>
      <div>{workout.description}</div>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/workouts/create");
          }}
        >
          Create Workout
        </button>
      </div>
      <footer>
        <div>Type: {workout.type}</div>
        <div>Duration (mins): {workout.duration}</div>
        <div className="btn-container">
          {currentUser.isACoach === "true" ? (
            <button className="btn btn-warning" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};

