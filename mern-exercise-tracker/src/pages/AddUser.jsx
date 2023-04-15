import React, { useState } from "react";
import axios from "axios";

import { UserForm } from "../components";

export const AddUser = () => {
  const [newUser, setNewUser] = useState({ username: '' });

  const AddUser = async (e) => {
    e.preventDefault();

    const result = await axios.post('http://localhost:5000/users/add', newUser)
    
    console.log(result.data)
    setNewUser({ username: '' });
  };

  const handleUserChange = (e) =>
    setNewUser({ username: e.target.value});

  return (
    <div className="mx-5 px-5">
      <h3 className="my-2">Add a new exercise log: </h3>
      <UserForm
        onSubmit={AddUser}
        onChangeUser={handleUserChange}
        user={newUser.username}
      />
    </div>
  );
};
