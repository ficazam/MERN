import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ExerciseForm } from "../components";
import axios from "axios";

export const AddExercise = () => {
  const [newExercise, setNewExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
  });

  const nav = useNavigate();

  const AddExercise = async (e) => {
    e.preventDefault();

    newExercise.date = new Date(newExercise.date);

    const result = await axios.post(
      "http://localhost:5000/exercises/add",
      newExercise
    );
    console.log(result.data);

    setNewExercise({
      username: "",
      description: "",
      duration: "",
      date: "",
    });
    nav("/");
  };

  const handleUserChange = (e) =>
    setNewExercise({ ...newExercise, username: e.target.value });

  const handleDescriptionChange = (e) =>
    setNewExercise({ ...newExercise, description: e.target.value });

  const handleDurationChange = (e) =>
    setNewExercise({ ...newExercise, duration: e.target.value });

  const handleDateChange = (e) => {
    setNewExercise({ ...newExercise, date: parseInt(e) });
  };

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
