/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      // fetch using axios

      const response = await fetch("http://localhost:3000/api/workouts");
      const json = await response.json();
      response.ok ? setWorkouts(json) : console.log("there is a problem");
    };
    fetchWorkout();
  }, []);

  return (
    <div className="div home">
      <div className="div workouts">
        {workouts && workouts.map((workout)=>(
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
