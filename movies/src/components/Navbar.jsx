import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex",
        backgroundColor: "inherit",
        justifyContent:"flex-end"
    },
    flexbox:{
        display:"flex",
        justifyContent:"flex-end"
    },
    title: {
        flexGrow: 1,
    },
    button: {
        backgroundColor: "red",
        color: "white",
        fontWeight:600,
        height: "40px",
        marginRight: "10px",
        borderRadius:"5px"
    },
    iconStyle: {
        color: "#f2abac",
        fontSize: "25px",
        height: "auto",
        marginRight: "10px",
    },
    bar: {
        marginTop: "-25px",
        marginLeft: "15%",
        maxWidth: "70%",
        minHeight: "65px",
    },
}));

// Navbar to guide the user to make both Signup and Login operations
// onClick on Sign In button Redirects the user to SignIn page
// onClick on Login button Redirects the user to SignIn page

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const gotoSignIn = (e) => {
    e.preventDefault()
    history.push("/signin")
  }

  const gotoLogin = (e) => {
    e.preventDefault()
    history.push("/login")
  }

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.root}
      >
        <Box className={classes.flexbox} m={2} mr={5}>
            <Box>
                <Button
                  className={classes.button}
                  color="inherit"
                  onClick={gotoSignIn}
                >
                  Sign In{" "}
                </Button>
            </Box>
            <Box>
              <Button 
                className={classes.button}
                color="inherit"
                onClick={gotoLogin}
                >
                    Login
              </Button>
            </Box>
          </Box>
      </AppBar>
    </div>
  );
};

export default Navbar;
