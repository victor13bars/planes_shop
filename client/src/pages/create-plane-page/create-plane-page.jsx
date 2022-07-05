import React from 'react';
import ContentWrapper from "../../components/content-wrapper/content-wrapper";
import {Button} from "../../components/button";
import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
import {Input} from "../../components/input";

export const CreatePlanePage = () => {
    const navigate = useNavigate()
    return (
        <ContentWrapper className={styles.createPlane}>
            <Button
                containerClassName={styles.backButtonContainer}
                onClick={()=> navigate(-1)}
                isBackButton={true}
            >
                Назад
            </Button>
            <form className={styles.form}>
                <h1 className={styles.title}>Создать самолёт</h1>
                <Input
                    name='name'
                    placeholder='Название самолёта'
                    onchange={() => null}
                />
                <Input
                    name='price'
                    placeholder='Цена самолёта'
                    onchange={() => null}
                />
                <Input
                    name='description'
                    placeholder='Описание'
                    onchange={() => null}
                />
                <Input
                    name='capacity'
                    placeholder='Вместимость'
                    onchange={() => null}
                />
                <Input
                    name='planeImage'
                    type='file'
                    placeholder='Вместимость'
                    onchange={() => null}
                />
                <Button
                    containerClassName={styles.buttonContainer}
                    onClick={() => null}
                >
                    Создать
                </Button>
            </form>
        </ContentWrapper>
    );
};