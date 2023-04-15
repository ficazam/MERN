import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ExerciseForm = (props) => {
  const [users, setUsers] = useState({ _id: 0, username: "" });
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    const tempUsers = await axios.get("http://localhost:5000/users");
    setUsers([users, ...tempUsers.data]);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {!loading ? (
        <form onSubmit={(e) => props.onSubmit(e)}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control my-2"
              value={props.exercise.username}
              onChange={(e) => props.onChangeUser(e)}
            >
              {users.map((user) => (
                <option key={user._id}>{user.username}</option>
              ))}
            </select>

            <label>Description: </label>
            <input
              required
              type="text"
              className="form-control my-2"
              value={props.exercise.description}
              onChange={(e) => props.onChangeDesc(e)}
            />

            <label>Duration In Minutes: </label>
            <input
              required
              type="text"
              className="form-control my-2"
              value={props.exercise.duration}
              onChange={(e) => props.onChangeDur(e)}
            />

            <label>Date: </label>
            <DatePicker
              className="my-2"
              selected={props.exercise.date}
              onChange={(e) => props.onChangeDate(e.getTime())}
            />
          </div>
          <button type="submit">Submit </button>
        </form>
      ) : (
        <p>L O A D I N G . . .</p>
      )}
    </div>
  );
};
