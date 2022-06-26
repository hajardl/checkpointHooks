import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { movies } from "../constatnts/Movies";
import ClampLines from "react-clamp-lines";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";



function MovieCard() {
  const [listMovies, setListMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "desc":
        setDescription(e.target.value);
        break;
      case "url":
        setUrl(e.target.value);
        break;
      default:
        setRating(e.target.value);
        break;
    }
  };
  const handleClick = () => {
    movies.push({
      title: title,
      description: description ,
      posterURL: url ,
      rating: rating ,
      picture: "images/freedom.jpg",
    });
    setListMovies([...movies])
    console.log(movies);
  };

  return (
    <div className="Moviecontainer">
      <div className="addMovie">
        <h1>Add  movie:</h1>
        <Box className="BoxStyle" >
          <TextField
              sx={{ width: "100%" }}
              id="title"
              label="Title"
              variant="standard"
              onChange={handleChange}
          />
        </Box>
        <Box className="BoxStyle" >
          <TextField
              sx={{ width: "100%" }}
              id="desc"
              label="Description"
              variant="standard"
              onChange={handleChange}
          />
        </Box>
        <Box className="BoxStyle" >
          <TextField
              sx={{ width: "100%" }}
              id="rating"
              label="Rating"
              variant="standard"
              onChange={handleChange}
          />
        </Box>
        <Box className="BoxStyle" >
          <TextField
              sx={{ width: "100%" }}
              id="url"
              label="PosterURL"
              variant="standard"
              onChange={handleChange}
          />
        </Box>
        <Button className="btn-add" variant="outlined" onClick={handleClick}>
          Add
        </Button>
      </div>
      <div className="section1">
        {listMovies.map((element) => (
          <div className="card">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={element.title}
                subheader={element.rating}
              />
              <CardMedia
                component="img"
                height="400"
                image={element.picture}
                alt={element.title}
              />

              <CardActions disableSpacing>
                <a href={element.posterURL}>check</a>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
/*
 */
