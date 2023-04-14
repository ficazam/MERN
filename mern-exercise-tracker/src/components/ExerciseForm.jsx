import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const users = ["", "papitas", "fritas", "de", "mcd"];

export const ExerciseForm = (props) => {
  return (
    <div>
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
              <option key={user}>{user}</option>
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
            onChange={(e) => props.onChangeDate}
          />
        </div>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
};
