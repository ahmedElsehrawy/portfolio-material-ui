import React from "react";
import "./Project.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <Card>
        <CardActionArea>
          <a target="_blank" href={project.url}>
            <CardMedia
              className="media"
              image={project.image}
              title={project.name}
            />
          </a>
          <CardContent>
            <Typography variant="h5">{project.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" size="medium" color="primary">
            <a target="_blank" href={project.url}>
              Open
            </a>
          </Button>
          <Link to="/overview">
            <Button variant="outlined" size="medium" color="secondary">
              About Project
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Project;
