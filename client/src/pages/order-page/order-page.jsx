import React from 'react';
import styles from './styles.module.css'
import ContentWrapper from "../../components/content-wrapper/content-wrapper";
import {Button} from "../../components/button";
import {useNavigate} from "react-router-dom";

export const OrderPage = () => {
    const navigate = useNavigate()
    return (
        <ContentWrapper className={styles.order}>
            <h1>Ваш заказ будет доставлен в ближайшее время</h1>
            <Button
                onClick={() => navigate('/')}
                containerClassName={styles.button}
            >
                На Главную
            </Button>
        </ContentWrapper>
    );
};
