import { useEffect, useState } from "react";

const AllTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://mern-volunteer-networks.herokuapp.com/taskData")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return tasks;
};

export default AllTaskList;
