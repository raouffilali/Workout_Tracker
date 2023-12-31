/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// import { AiFillDelete } from "react-icons/ai";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      // //a modern  dialog box to say deleted successfully
      // alert("Deleted successfully");

      // // reload page
      window.location.reload();
      // Delete workout from state
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const date = dateObj.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = dateObj.toLocaleTimeString(); // Format: HH:MM:SS

    return { date, time };
  };

  const { date, time } = formatDate(workout.createdAt);

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Date: </strong>
        {date}
      </p>
      <p>
        <strong>Time: </strong>
        {time}
      </p>
      <p>
        <strong>Added: </strong>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
      {/*       <span onClick={handleClick}>
        <AiFillDelete size={25} color="black" />
      </span> */}
    </div>
  );
};

// Prop validation using PropTypes
WorkoutDetails.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    // Add any other properties of the 'workout' object here if applicable
  }).isRequired,
};

export default WorkoutDetails;
