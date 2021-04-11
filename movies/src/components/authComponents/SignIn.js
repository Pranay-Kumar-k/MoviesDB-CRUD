import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Typography } from '@material-ui/core';

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
    fontWeight:"500"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  const [phone,setPhone] = useState(0);
  const [password,setPassword] = useState("");

  const handleSignIn = (e) => {
      e.preventDefault()
    console.log(phone,password)
  } 

  return (
      <Paper elevation={3} className={classes.root}>
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
      </Paper>
  );
}
