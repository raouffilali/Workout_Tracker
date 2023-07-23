// import PropTypes from 'prop-types';

// const WorkoutDetails = ({workout})=>{
//     return(
//         <div className="workout-details">
//             <h4>{workout.title}</h4>
//             <p><strong>Load (kg): </strong>{workout.load}</p>
//             <p><strong>Reps: </strong>{workout.reps}</p>
//             <p>{workout.createdAt}</p>

//         </div>
//     )
// }
// // Prop validation using PropTypes
// WorkoutDetails.propTypes = {
//   workout: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     load: PropTypes.number.isRequired,
//     reps: PropTypes.number.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     // Add any other properties of the 'workout' object here if applicable
//   }).isRequired,
// };
// export default WorkoutDetails;

import PropTypes from 'prop-types';

const WorkoutDetails = ({ workout }) => {
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
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p><strong>Date: </strong>{date}</p>
      <p><strong>Time: </strong>{time}</p>
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
