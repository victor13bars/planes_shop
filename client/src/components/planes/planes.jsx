import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../../store/planes/planesSlice";
import {Spinner} from "../spinner";
import ContentWrapper from "../content-wrapper/content-wrapper";

export const Planes = () => {
    const dispatch = useDispatch();
    const {planes, isLoading} = useSelector(state => state.planes)

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <ContentWrapper>
                {planes && planes.map(plane => plane.name)}
            </ContentWrapper>
        </div>
    );
};
