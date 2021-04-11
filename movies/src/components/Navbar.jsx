import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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

const Navbar = () => {
  const classes = useStyles();

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
                >
                  Sign In{" "}
                </Button>
            </Box>
            <Box>
              <Button 
                className={classes.button}
                color="inherit"
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
