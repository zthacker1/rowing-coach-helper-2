import { useEffect, useState } from "react";
import { workoutOptions } from "./workoutOptions";
import { createWorkout, getWorkouts } from "../../services/workoutService";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export const CreateWorkoutForm = () => {
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    type: "",
  });

  const getAndSetWorkouts = () => {
    getWorkouts().then((workoutsArray) => {
      
      setWorkout(workoutsArray);
    });
  };

  useEffect(() => {
    getAndSetWorkouts();
  }, [workout]);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    if (workout.type) {
      const newWorkout = {
        name: workout.name,
        description: workout.description,
        type: workout.type,
      };
      createWorkout(newWorkout).then(() => {
        navigate("/workouts");
      });
    } else {
      window.alert("Select a type");
    }
  };

  return (
    <form>
      <h2>New Workout</h2>
      <fieldset>
        <div className="form-group">
          <label>New Workout Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Workout Name"
            onChange={(event) => {
              const workoutCopy = { ...workout };
              workoutCopy.name = event.target.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description of workout"
            onChange={(event) => {
              const workoutCopy = { ...workout };
              workoutCopy.description = event.target.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Workout Type</label>
          <Select
            options={workoutOptions}
            placeholder="Select a workout type..."
            onChange={(selectedOption) => {
              const workoutCopy = { ...workout };
              workoutCopy.type = selectedOption.value;
              setWorkout(workoutCopy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info" onClick={handleSave}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
