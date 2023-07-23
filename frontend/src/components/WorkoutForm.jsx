// MINE
import { useState } from "react";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      // If there are errors in the response, set the errors state
      setErrors(json.errors);
    } else {
      // If the response is successful, reset the form and clear errors
      setErrors({});
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      {errors.title && <div className="error">{errors.title.msg}</div>}

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        required
      />
      {errors.load && <div className="error">{errors.load.msg}</div>}

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        required
      />
      {errors.reps && <div className="error">{errors.reps.msg}</div>}

      <button>Add Workout</button>
      {errors.error && <div className="error">{errors.error}</div>}
    </form>
  );
};

export default WorkoutForm;

// --------------------------METHOD 2 ---------------------------
// /* eslint-disable no-unused-vars */
// import { useState } from "react";

// const WorkoutForm = () => {
//   const [title, setTitle] = useState("");
//   const [load, setLoad] = useState("");
//   const [reps, setReps] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const workout = { title, load, reps };

//     const response = await fetch("http://localhost:3000/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(workout),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setError(null);
//       setTitle("");
//       setLoad("");
//       setReps("");
//       console.log("new workout added:", json);
//     }
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a New Workout</h3>

//       <label>Excersize Title:</label>
//       <input
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         required
//       />

//       <label>Load (in kg):</label>
//       <input
//         type="number"
//         onChange={(e) => setLoad(e.target.value)}
//         value={load}
//         required
//       />

//       <label>Number of Reps:</label>
//       <input
//         type="number"
//         onChange={(e) => setReps(e.target.value)}
//         value={reps}

//       />

//       <button>Add Workout</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default WorkoutForm;

// ------------------------METHOD 3-------------------
/*import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}

    const response = await fetch('http://localhost:3000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm





 */
