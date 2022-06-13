import React, { useEffect } from "react";
import { useState } from "react";

const useProject = () => {
  const [project, setProject] = useState([]);
  console.log(project)
  useEffect(() => {
    fetch("project.json")
    .then(res=>res.json())
    .then(data=>setProject(data));
  }, []);
  return [project];
};

export default useProject;
