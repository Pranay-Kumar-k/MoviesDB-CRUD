import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getItemsData } from '../../redux/DataRedux/actionCreator';

export default function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies.movies)
    const token = useSelector(state => state.login.token);
    console.log(data,token)
    useEffect(() => {
        dispatch(getItemsData(token))
    }, [])
    return (
        <div>
            Home
        </div>
    )
}
