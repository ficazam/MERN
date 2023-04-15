import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const getExercises = async () => {
    setLoading(true);
    const exeTemp = await axios.get("http://localhost:5000/exercises");
    exeTemp.data.map(exercise => {
      exercise.date = new Date(exercise.date).toLocaleDateString()
    })
    
    setExercises(exeTemp.data);
    setLoading(false)
  };

  const handleDelete = async(id) => {
    const response = await axios.delete(`http://localhost:5000/exercises/${id}`)
    console.log(response.data)

    getExercises()
  }

  useEffect(() => {
    getExercises();
  },[]);

  return (
    <div>
      {!loading ?
        exercises.map((exercise) => 
            <div className="w-50 p-3 my-3 mx-auto border rounded align-self-center" key={exercise._id}>
              <h5>Exercise: {exercise.description}</h5>
              <p>Performed by: {exercise.username}</p>
              <p>For {exercise.duration} minutes</p>
              <p>on {exercise.date}</p>
              <div className="d-flex justify-content-between">
                <button className="border rounded bg-dark"><Link className="text-light" style={{textDecoration: 'none'}} to={`/edit/${exercise._id}`}>Edit Exericse</Link></button>
                <button className="border rounded bg-danger text-light" onClick={(id) => handleDelete(exercise._id)}>Delete Exercise</button>
              </div>
            </div>
        ) : <h1>L O A D I N G . . .</h1>}
    </div>
  );
};
