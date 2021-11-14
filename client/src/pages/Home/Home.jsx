import React from "react";
import Header from "../../components/Header/Header";
import PageFrame from "../../components/PageFrame/PageFrame";
import AddMoodboardButton from "../../components/AddMoodboardButton/AddMoodboardButton";

function Home() {
  return (
    <div className="page">
      <Header/>
      <PageFrame>
      <h1>Home Page</h1>
      <AddMoodboardButton/>
      </PageFrame>
    </div>
  );
}

export default Home;
