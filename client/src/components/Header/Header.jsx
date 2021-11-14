import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
// import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from "./../NavDrawer/NavDrawer";

import { UIContext } from "../../contexts/UIContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBlockEnd: "5vh",
  },
  toolbar: {
    backgroundColor: "hsl(113, 100%, 19%)",
  },
  menuButton: {
    marginRight: "50px", // Because it off-centers the title (logically -64px)
  },
  title: {
    flexGrow: 1,
    fontSize: "1rem",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    marginLeft: "-75px",
  },
  typography: {
    button: {
    textTransform: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { toggle } = useContext(UIContext);
  return (
    <div className={classes.root}>
      <NavDrawer />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open menu"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h1" noWrap>
            Cracking Christmas Moodboard
          </Typography>
          {/* <Button
              edge="start"
              className={classes.button}
              color="inherit"
              aria-label="log in"
              // onClick={() => loginWithRedirect()}
            >View my Moodboard
            </Button> */}
        </Toolbar>
      </AppBar>
    </div>
    // <header>
    //   <span>Cracking Christmas Countdown!</span>
    //   <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/recipes">Recipes</NavLink>
    //     <NavLink to="/playlists">Playlists</NavLink>
    //     <NavLink to="/movies">Movies</NavLink>
    //     <NavLink to="/gifts">Gifts</NavLink>
    //     <NavLink to="/activities">Activities</NavLink>
    //   </nav>
    // </header>
  );
}





