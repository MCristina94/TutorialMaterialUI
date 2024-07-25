import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const BluuCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000x200"
        height="200"
        alt="imagen 100x200"
      />
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography component="p" variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error" >Remove</Button>
      </CardActions>
    </Card>
  );
};

export default BluuCard;
