export const getWorkouts = () => {
  return fetch(`http://localhost:8088/workouts`).then((res) => res.json());
};

export const getWorkoutById = (workoutId) => {
  return fetch(`http://localhost:8088/workouts?=id${workoutId}`).then((res) =>
    res.json()
  );
};

export const createWorkout = (workout) => {
  return (
    fetch(`http://localhost:8088/workouts`),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }
  );
};

export const deleteWorkout = (workoutid) => {
  return fetch(
    (`http://localhost:8088/workouts`,
    {
      method: "DELETE",
    })
  );
};
