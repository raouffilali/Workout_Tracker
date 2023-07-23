

// MINE
import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
// import { useEffect, useState } from "react";

// // components
// import WorkoutDetails from "../components/WorkoutDetails";
// import WorkoutForm from "../components/WorkoutForm";

// const Home = () => {
//   const [workouts, setWorkouts] = useState(null);

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch("http://localhost:3000/api/workouts");
//       const json = await response.json();

//       if (response.ok) {
//         setWorkouts(json);
//       }
//     };

//     fetchWorkouts();
//   }, []);

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts &&
//           workouts.map((workout) => (
//             <WorkoutDetails workout={workout} key={workout._id} />
//           ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   );
// };

// export default Home;
