import React, { useEffect } from "react";
import { useState } from "react";

const useProject = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("https://nameless-bastion-97335.herokuapp.com/projects")
    .then(res=>res.json())
    .then(data=>setProject(data));
  }, []);
  return [project];
};

export default useProject;
