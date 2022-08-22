import { Grid } from "@material-ui/core";
import "./Home.css";
import React, { useState } from "react";
import Project from "../components/Project/Project";
import netflix from "../images/netflix.jpg";
import whatsapp from "../images/whatsapp.png";

const Home = () => {
  const [projects, setProject] = useState([
    {
      image: netflix,
      name: "Netflix Clone",
      url: "https://netflix-72e5a.web.app/",
    },
    {
      image: whatsapp,
      name: "WhatsApp Clone",
      url: "https://whatsapp-7f524.web.app/",
    },
    {
      image: netflix,
      name: "Netflix Clone",
      url: "https://netflix-72e5a.web.app/",
    },
    {
      image: whatsapp,
      name: "WhatsApp Clone",
      url: "https://whatsapp-7f524.web.app/",
    },
    {
      image: netflix,
      name: "Netflix Clone",
      url: "https://netflix-72e5a.web.app/",
    },
    {
      image: whatsapp,
      name: "WhatsApp Clone",
      url: "https://whatsapp-7f524.web.app/",
    },
  ]);

  return (
    <div className="container">
      <Grid container spacing={1} className="grid">
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4}>
            <Project key={project.name} project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
