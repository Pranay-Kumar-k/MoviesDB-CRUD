import React, { useEffect} from 'react';
import { useSelector} from "react-redux";
import MoviesTable from './MoviesTable';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export default function Home() {
    const data = useSelector(state => state.movies.movies);
    const history = useHistory();
    console.log(data)
    const gotoAddMoviePage = () => {
        history.push("/addMovie");
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
            </div>
            {data ? (<MoviesTable movies={data} />) : null}
        </div>
    )
}
