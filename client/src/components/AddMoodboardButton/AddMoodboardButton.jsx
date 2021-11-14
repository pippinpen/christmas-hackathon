import React from 'react';
import { useHistory } from "react-router-dom";

const AddMoodboardButton = () => {
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/create-moodboard`; 
    history.push(path);
  }
  return <button onClick={routeChange}>Create Moodboard</button>;
};

export default AddMoodboardButton;
