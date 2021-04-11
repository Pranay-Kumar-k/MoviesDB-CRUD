import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Typography } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../redux/LoginRedux/actionCreator";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    border:"2px solid black",
    height:"500px",
    width:"400px",
    background:"black",
    opacity:"0.8",
    margin:"8% 0% 5% 28%",
    padding:"50px",
    color:"white",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start"
  },
  text:{
    background:"#838383",
    margin:"15px",
    textAlign:'center',
    color:"white",
    height:"50px",
    fontWeight:"500",
    padding:"5px",
  },
  submit: {
    margin: theme.spacing(1, 0, 5),
    borderRadius:"5px",
    background:"red",
    fontWeight:"600",
  },
  form:{
      display:'flex',
      flexDirection:"column"
  }
}));

export default function Login() {
  const classes = useStyles();
  const [phone,setPhone] = useState(null);
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoading,isError,isAuth,user,token} = useSelector(state => state.login)

  const handleLogin = (e) => {
      e.preventDefault()
    console.log(phone,password)
    dispatch(loginUser({phone,password}))
  } 
  
  useEffect(() => {
    token && history.push("/home")
  },[token])

  const handleSignIn = (e) => {
    e.preventDefault()
    history.push("/signin")
  }

  console.log(user,token)
  return (
      <Paper elevation={3} className={classes.root}>
          <h1>Login</h1>
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Typography>Dont have an account ?</Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
            </form>
      </Paper>
  );
}
