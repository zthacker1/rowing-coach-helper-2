import { useNavigate } from "react-router-dom";
import { editWorkout, useWorkouts } from "../../services/workoutEditService";
import Select from "react-select";

export const EditWorkoutForm = () => {
  const navigate = useNavigate();

  if (!workout) {
    return <div>No workout selected</div>;
  }

  const handleSave = (event) => {
    event.preventDefault();

    if (workout.type) {
      const newWorkout = {
        name: selectedWorkout.name,
        description: selectedWorkout.description,
        type: selectedWorkout.type,
      };
      editWorkout(newWorkout).then(() => {
        navigate("/workouts");
      });
    } else {
      window.alert("Select a type");
    }
  };

  const workoutOptions = [
    { value: "power", label: "Power" },
    { value: "endurance", label: "Endurance" },
    { value: "drill", label: "Drill" },
  ];

  // Use `selectedWorkout` to populate form fields
  return (
    <form onSubmit={handleSave}>
      {
        <form>
          <h2>Edit Workout</h2>
          <fieldset>
            <div className="form-group">
              <label>Update Workout Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={selectedWorkout.name}
                onChange={(event) => {
                  const workoutCopy = { ...selectedWorkout };
                  workoutCopy.name = event.target.value;
                  setSelectedWorkout(workoutCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Update Description</label>
              <input
                type="text"
                className="form-control"
                placeholder={selectedWorkout.description}
                onChange={(event) => {
                  const workoutCopy = { ...workout };
                  workoutCopy.description = event.target.value;
                  setSelectedWorkout(workoutCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Update Workout Type</label>
              <Select
                options={workoutOptions}
                placeholder={selectedWorkout.type}
                onChange={(selectedOption) => {
                  const workoutCopy = { ...workout };
                  workoutCopy.type = selectedOption.value;
                  setSelectedWorkout(workoutCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="form-btn btn-info">Update</button>
            </div>
          </fieldset>
        </form>
      }
    </form>
  );
};
