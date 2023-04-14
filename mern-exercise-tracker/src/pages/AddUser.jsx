import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserForm } from "../components";

export const AddUser = () => {
  const [newUser, setNewUser] = useState({ username: '' });

  const nav = useNavigate();

  const AddUser = (e) => {
    e.preventDefault();
    console.log(newUser);
    setNewUser({ username: '' });
    //nav('/')
  };

  const handleUserChange = (e) =>
    setNewUser({ username: e.target.value});

  return (
    <div className="mx-5 px-5">
      <h3 className="my-2">Add a new exercise log: </h3>
      <UserForm
        onSubmit={AddUser}
        onChangeUser={handleUserChange}
      />
    </div>
  );
};
