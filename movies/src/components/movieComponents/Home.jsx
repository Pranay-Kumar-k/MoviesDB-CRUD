import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch} from "react-redux";
import MoviesTable from './MoviesTable';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import { getItemsData } from '../../redux/DataRedux/actionCreator';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Home() {
    const history = useHistory();
    const [ready,setReady] = useState(false);
    const data = useSelector(state => state.movies.movies)
    const {isLoading,isError,isAuth,user,token} = useSelector(state => state.login)
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setReady(true)
        }, 5000);
        dispatch(getItemsData(token))
    },[])
    console.log(data)

    const gotoAddMoviePage = () => {
        history.push("/addMovie");
    } 

    const handleLogout = () => {
        history.push("/")
    }
    return (
        <div>
            <div>
                <Button
                    style={{backgroundColor: "red",
                            color: "white",
                            fontWeight:600,
                            height: "40px",
                            marginRight: "10px",
                            borderRadius:"5px",
                            margin:"20px"
                        }}
                    color="inherit"
                    onClick={gotoAddMoviePage}
                    >
                    Add Movie{" "}
                </Button>
                <Button
                    style={{backgroundColor: "red",
                            color: "white",
                            fontWeight:600,
                            height: "40px",
                            marginRight: "10px",
                            borderRadius:"5px",
                            margin:"20px"
                        }}
                    color="inherit"
                    onClick={handleLogout}
                    >
                    Logout{" "}
                </Button>
            </div>
            {!ready ? (<CircularProgress disableShrink />) : (<MoviesTable movies={data} />)}
        </div>
    )
}
