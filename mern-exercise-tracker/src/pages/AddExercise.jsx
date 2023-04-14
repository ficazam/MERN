import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ExerciseForm } from "../components";

export const AddExercise = () => {
  const [newExercise, setNewExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
  });

  const nav = useNavigate();

  const AddExercise = (e) => {
    e.preventDefault();
    console.log(newExercise);
    setNewExercise({
      username: "",
      description: "",
      duration: "",
      date: "",
    });
    //nav('/')
  };

  const handleUserChange = (e) =>
    setNewExercise({ ...newExercise, username: e.target.value });

  const handleDescriptionChange = (e) =>
    setNewExercise({ ...newExercise, description: e.target.value });

  const handleDurationChange = (e) =>
    setNewExercise({ ...newExercise, duration: e.target.value });

  const handleDateChange = (e) =>
    setNewExercise({ ...newExercise, date: e.target.value });

  return (
    <div className="mx-5 px-5">
      <h3 className="my-2">Add a new exercise log: </h3>
      <ExerciseForm
        onSubmit={AddExercise}
        onChangeUser={handleUserChange}
        onChangeDesc={handleDescriptionChange}
        onChangeDur={handleDurationChange}
        onChangeDate={handleDateChange}
        exercise={newExercise}
      />
    </div>
  );
};
