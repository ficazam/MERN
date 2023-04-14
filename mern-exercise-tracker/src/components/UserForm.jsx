import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const users = ["", "papitas", "fritas", "de", "mcd"];

export const UserForm = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.onSubmit(e)}>
        <div className="form-group">
          <label>User: </label>
          <input
            required
            type="text"
            className="form-control my-2"
            value={props.user}
            onChange={(e) => props.onChangeUser(e)}
          />
        </div>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
};
