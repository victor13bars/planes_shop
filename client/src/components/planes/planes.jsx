import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../../store/planes/planesSlice";
import {Spinner} from "../spinner";
import ContentWrapper from "../content-wrapper/content-wrapper";
import {PlaneItem} from "../plane-item";
import {Link} from "react-router-dom";
import {paths} from "../../paths";
import {Button} from "../button";
import {useSortPlanes} from "../../hooks/useSortPlanes";

export const Planes = () => {
    const dispatch = useDispatch();
    const {planes, isLoading} = useSelector(state => state.planes)
    const {isDescSort, setIsDescSort, sortedPlanes} = useSortPlanes(planes || [])

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div>
            <div className={styles.sort}>
                <ContentWrapper className={styles.planesHeader}>
                    <Button
                        className={styles.sortBtn}
                        onClick={() => setIsDescSort(!isDescSort)}
                    >
                        Сортировать по цене {`${isDescSort ? '+' : '-'}`}
                    </Button>
                    <Link
                        className={styles.createPlaneBtn}
                        to={paths.createPlane}>Добавить самолёт
                    </Link>
                </ContentWrapper>

            </div>
            <ContentWrapper className={styles.planesGrid}>
                {sortedPlanes && sortedPlanes.map(plane => <PlaneItem key={plane._id}{...plane}/>)}
            </ContentWrapper>
        </div>
    );
};
