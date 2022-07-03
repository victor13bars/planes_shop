import React, {useEffect} from 'react';
import styles from './styles.module.css'
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPlane} from "../../store/plane/planeSlice";
import {Spinner} from "../../components/spinner";

export const PlanePage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const {plane, isLoading} = useSelector(state => state.plane)

    useEffect(() => {
        dispatch(getPlane(id))
    }, [dispatch, id])

    if (isLoading) return <Spinner/>

    return plane && (
        <div>
            PlanePage
        </div>
    );
};