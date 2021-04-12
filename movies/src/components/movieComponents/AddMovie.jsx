import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { getItemsData, postMovieData } from '../../redux/DataRedux/actionCreator';

const useStyles = makeStyles((theme) => ({
  root: {
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

export default function Login() {
  const classes = useStyles();
  const [title,setTitle] = useState("");
  const [genre,setGenre] = useState("");
  const [year,setYear] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.movies.movies)
  const {isLoading,isError,isAuth,user,token} = useSelector(state => state.login)

  const addMovie = (e) => {
      e.preventDefault()
      const payload = {
          movie_title:title,
          genre:genre,
          released_year:year
      }
      dispatch(postMovieData(payload,token))
        redirect()
  } 
  const redirect = () => {
    if(data) {
      dispatch(getItemsData(token))
    }
    if(isAuth) {
      history.push("/home")
    }
  }

  console.log(user,token)
  return (
      <Paper elevation={3} className={classes.root}>
          <h1>Add Movie</h1>
            <form className={classes.form}>
                <TextField
                    className={classes.text}
                    InputProps={{ disableUnderline: true ,style: {color: "black",height:"100%",fontWeight:"600"}}}
                    required
                    fullWidth
                    label="Title of the Movie"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <TextField
                    className={classes.text}
                    InputProps={{ disableUnderline: true ,style: {color: "black",fontWeight:"600"}}}
                    required
                    fullWidth
                    label="Genre"
                    name="genre"
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <TextField
                    className={classes.text}
                    InputProps={{ disableUnderline: true ,style: {color: "black",fontWeight:"600"}}}
                    required
                    fullWidth
                    label="Released Year"
                    name="released year"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    className={classes.submit}
                    onClick={addMovie}
                >
                    Add Movie
                </Button>
            </form>
      </Paper>
  );
}
