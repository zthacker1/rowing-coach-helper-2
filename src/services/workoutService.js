export const getAllWorkouts = () => {
  return fetch(`http://localhost:8088/workouts`).then((res) => res.json());
};

export const deleteWorkout = (workoutId) => {
  return fetch(`http://localhost:8088/workouts/${workoutId}`, {
    method: "DELETE",
  });
};
