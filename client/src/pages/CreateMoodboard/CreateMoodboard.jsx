import React from "react";
import Header from "../../components/Header/Header";
import PageFrame from "../../components/PageFrame/PageFrame";
import AddMoodboardButton from "../../components/AddMoodboardButton/AddMoodboardButton";

function CreateMoodboard() {
  return (
    <div className="page">
      <Header/>
      <PageFrame>
      <h1>CreateMoodboard Page</h1>
      <AddMoodboardButton/>
      </PageFrame>
    </div>
  );
}

export default CreateMoodboard;
