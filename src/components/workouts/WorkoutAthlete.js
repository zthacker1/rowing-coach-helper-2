import "./Workout.css";

export const WorkoutAthlete = ({ workout }) => {
  return (
    <section className="workout" key={workout.id}>
      <header>{workout.name}</header>
      <div>{workout.description}</div>
      <footer>
        <div>Type: {workout.type}</div>
        <div className="btn-container" />
      </footer>
    </section>
  );
};
