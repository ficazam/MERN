import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ExerciseForm } from "../components";
import axios from "axios";

export const EditExercise = () => {
  const [newExercise, setNewExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
  });

  const params = useParams();
  const nav = useNavigate();

  const getExerciseToEdit = async () => {
    const exeTemp = await axios.get(
      `http://localhost:5000/exercises/${params.id}`
    );

    exeTemp.data.date = new Date(exeTemp.data.date).getTime();

    setNewExercise(exeTemp.data);
  };

  const editExercise = async (e) => {
    e.preventDefault();

    newExercise.date = new Date(newExercise.date);

    const result = await axios.post(
      `http://localhost:5000/exercises/update/${params.id}`,
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

  const handleDateChange = (e) =>
    setNewExercise({ ...newExercise, date: parseInt(e) });

  useEffect(() => {
    getExerciseToEdit();
  }, []);

  return (
    <div className="mx-5 px-5">
      <h3 className="my-2">Edit exercise log: </h3>
      <ExerciseForm
        onSubmit={editExercise}
        onChangeUser={handleUserChange}
        onChangeDesc={handleDescriptionChange}
        onChangeDur={handleDurationChange}
        onChangeDate={handleDateChange}
        exercise={newExercise}
      />
    </div>
  );
};
