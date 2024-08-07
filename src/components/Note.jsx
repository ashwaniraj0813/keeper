import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        className="note button"
        onClick={function () {
          props.check(props.id);
        }}
      >
        <DeleteIcon fontSize="medium" />
      </button>
    </div>
  );
}

export default Note;
