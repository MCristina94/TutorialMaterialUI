import { Container} from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const navList = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Login", path: "/login", icon: <LoginIcon /> },
  { title: "Register", path: "/register", icon: <AppRegistrationIcon /> },
];

function App() {
  return (
    <>
      <Navbar navList={navList}/>
      <Container sx={{mt: 5}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Container>
    </>
   
  );
}

export default App;

{
  /* <Container sx={{border: 2, boxShadow: 3, pb: 2 }}>
<h1>APP</h1>
<Typography variant="h1" component="h2">App h1 con componente</Typography>
<Typography variant="h3" textAlign="center" mt={50}>soy otro texto</Typography>
<Button variant="contained">Mi primer botón</Button>
</Container> 
<Box sx={{border: 2, p: 5, borderColor: 'red', bgcolor: 'black', color: 'white' }}>
  esto es una prueba de box
</Box>


----

 <h1>APP</h1>
      <Typography variant="h1" component="h3" color="secondary">H3 titulo</Typography>
      <Button variant="outlined" color="error" startIcon={<DeskIcon/>} >Mi primer botón</Button>
      <Button variant="contained" color="success" endIcon={<DesktopAccessDisabledIcon/>}>Mi primer botón</Button>
-------

<Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
      </Grid>
    </Container>


 */


}
