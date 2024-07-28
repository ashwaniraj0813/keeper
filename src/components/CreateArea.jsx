import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.Change2}
          name="title"
          placeholder="Title"
          value={props.Title}
        />
        <textarea
          onChange={props.Change1}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.Text}
        />
        <button onClick={props.Change3}><AddIcon fontSize="large"/></button>
      </form>
    </div>
  );
}

export default CreateArea;
