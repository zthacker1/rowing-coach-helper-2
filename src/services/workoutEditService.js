import React, { createContext, useContext, useState } from "react";

export const WorkoutContext = createContext();

export const useWorkouts = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  return (
    <WorkoutContext.Provider value={{ selectedWorkout, setSelectedWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const editWorkout = (newWorkout) => {
  return fetch(`http://localhost:8088/workouts/${newWorkout.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWorkout),
  });
};
