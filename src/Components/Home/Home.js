import React from "react";
import AllTaskList from "../DataBase/AllTaskList";
import Navigation from "../Navigation/Navigation";
import TaskCards from "../TaskCards/TaskCards";
import "./home.css";
const Home = () => {
  const tasks = AllTaskList();
  return (
    <div>
      <Navigation></Navigation>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
        I GROW BY HELPING PEOPLE IN NEED
      </h2>
      <div class="box">
        <input
          className="search-bar"
          type="search"
          id="search"
          placeholder="Search..."
        />
        <button
          className="search-btn"
          style={{ fontWeight: "bold", marginLeft: "2px" }}
        >
          Search
        </button>
      </div>
      <div className="taskLists">
        {tasks.map((tasks) => (
          <TaskCards tasks={tasks}></TaskCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
