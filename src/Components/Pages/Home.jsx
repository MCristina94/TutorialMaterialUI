import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import Face6Icon from "@mui/icons-material/Face6";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity="success">
            <AlertTitle>Succes</AlertTitle>
            This is a filled success Alert.
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Home;
{
  /* <Box sx={{display: "grid", gap: "1rem"}}>
        <Alert  severity="success">
          <AlertTitle>Succes</AlertTitle>
          This is a filled success Alert.
        </Alert>
        <Alert 
          severity="info" 
          action={
            <>
              <Button color="inherit">Delete</Button>
              <Button color="inherit">Update</Button>
            </>
          
          }>
          This is a filled info Alert.
        </Alert>
        <Collapse in={open}>
          <Alert variant="outlined" severity="warning" onClose={() => {setOpen(false)}}>
            This is a filled warning Alert.
          </Alert>
        </Collapse>
        
        <Alert variant="filled" severity="error" icon={<Face6Icon/>}>
          This is a filled error Alert.
        </Alert>
      </Box> */
}
