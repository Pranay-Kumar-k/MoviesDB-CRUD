import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Typography } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from '../../redux/RegistrationRedux/actionCreator';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border:"2px solid black",
    height:"500px",
    width:"400px",
    background:"black",
    opacity:"0.9",
    margin:"8% 0% 5% 28%",
    padding:"50px",
    color:"white",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    borderRadius:"10px"
  },
  text:{
    background:"white",
    margin:"15px",
    textAlign:'center',
    color:"black",
    height:"50px",
    fontWeight:"500",
    padding:"5px",
    border:"5px"
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    borderRadius:"5px",
    background:"red",
    fontWeight:"600",
  },
  form:{
      display:'flex',
      flexDirection:"column"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [phone,setPhone] = useState(null);
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading,isError,isRegister} = useSelector(state => state.registration)
  console.log(isRegister)

  const handleSignIn = (e) => {
      e.preventDefault()
    console.log(phone,password)
    dispatch(registerUser({phone,password}))
  } 
  return (
    <div>
      {!isRegister ? (<Paper elevation={3} className={classes.root}>
        <h1>Sign In</h1>
          <form className={classes.form}>
              <TextField
                  className={classes.text}
                  InputProps={{ disableUnderline: true ,style: {color: "white",height:"100%",marginLeft:"20px"}}}
                  required
                  fullWidth
                  label="PHONE NUMBER"
                  name="phone"
                  type="number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
              />
              <TextField
                  className={classes.text}
                  InputProps={{ disableUnderline: true ,style: {color: "white",marginLeft:"20px"}}}
                  required
                  fullWidth
                  label="PASSWORD"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <Typography variant="caption">BY CLICKING BELOW TO SIGN UP, YOU'RE AGREEING TO OUR TERMS OF USE AND PRIVACY POLICY </Typography>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={handleSignIn}
              >
                  SIGN UP
              </Button>
          </form>
      </Paper>): <Redirect to="/login" />}
      </div>
  );
}
