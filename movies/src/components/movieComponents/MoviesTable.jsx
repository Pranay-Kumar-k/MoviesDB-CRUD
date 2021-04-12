import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useDispatch,useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { deleteMovie, getItemsData, updateMovie } from '../../redux/DataRedux/actionCreator';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    width:"100%",
    background:"whitesmoke",
    opacity:"0.9",
  },
  delete:{
    marginLeft: 10,
    cursor:"pointer"
  },
  view:{
    marginRight: 10,
    background:"black",
    cursor:"pointer"
  },
  edit:{
    marginRight:10,
    marginLeft:10,
    cursor:"pointer"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: 'relative',
    right: theme.spacing(1),
    left:theme.spacing(1),
    marginLeft:"90%"
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  body:{
    color:"black",
    fontWeight:"900",
  },
  card:{
    width:"auto",
  }
}));

export const MoviesTable = ({movies}) => {

  console.log(movies.data)
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [edit,setEdit] = useState(false);
  const [title,setTitle] = useState("")
  const [genre,setGenre] = useState("")
  const [_id,setId] = useState("")
  const [year,setYear] = useState(null)
  const dispatch = useDispatch()
  const token = useSelector(state => state.login.token)
  const Movies = useSelector(state => state.movies.movies);

  
  useEffect(() => {
    dispatch(getItemsData(token))
  },[])


  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = (item) => {
    setOpen(true);
    setEdit(true);
    setTitle(item.movie_title);
    setGenre(item.genre);
    setYear(item.released_year);
    setId(item._id)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      movie_title:title,genre:genre,released_year:year
    }
    console.log(payload)
    dispatch(updateMovie(_id,payload,token))
    setOpen(false)
  }

  const handleDelete = (item) => {
    console.log(item,token)
    dispatch(deleteMovie(item._id,token))
  };

  const handleView = (item) => {
    console.log(item)
    setOpen(true)
    setEdit(false)
    setTitle(item.movie_title)
    setGenre(item.genre);
    setYear(item.released_year);
  }

  return (
   <div>
     {movies ? ( <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Movie Title</StyledTableCell>
            <StyledTableCell align="right">Genre</StyledTableCell>
            <StyledTableCell align="right">Released Year</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {movies ? movies.data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row" className={classes.body}>
                {item.movie_title}
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.body}>{item.genre}</StyledTableCell>
              <StyledTableCell align="right" className={classes.body}>{item.released_year}</StyledTableCell>
              <StyledTableCell align="right" className={classes.body}>{item.status}</StyledTableCell>
              <StyledTableCell align="right">
                  <Button variant="contained" color="primary" onClick={(e) => handleView(item)} className={classes.view}>
                    <Tooltip title="View details"  placement="top">
                      <VisibilityIcon /> 
                    </Tooltip>
                  </Button> |
                  <Button variant="contained" color="primary" onClick={(e) => handleEdit(item)} className={classes.edit}>
                    <Tooltip title="Edit Item"  placement="top">
                        <EditIcon />
                    </Tooltip>
                  </Button>
              <Modal
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <div className={classes.head}>
                      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                          <CloseIcon />
                      </IconButton>
                    </div>
                    {edit ? (<form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="movie_title"
                          variant="outlined"
                          required
                          fullWidth
                          label="Movie Title"
                          autoFocus
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="Genre"
                          name="genre"
                          value={genre}
                          onChange={(e) => setGenre(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="year"
                          label="Released Year"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </form>) : (<Paper elevation={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="p" component="h2" m={2}>
                            Movie Title - {title}
                          </Typography>
                          <Typography variant="h6" gutterBottom m={2}>
                            Genre - {genre}
                          </Typography>
                          <Typography variant="h6" gutterBottom m={2}>
                            Released Year - {year}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Paper>)}
                  </div>
                </Fade>
              </Modal>
               | 
              <Button variant="contained" color="secondary" className={classes.delete} onClick={(e) => handleDelete(item)}>
                <Tooltip title="Delete" placement="top">
                  <DeleteIcon />
                </Tooltip>
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>) : null}
   </div>
  );
}
export default MoviesTable