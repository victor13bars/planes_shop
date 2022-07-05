import React, {useCallback, useState} from 'react';
import ContentWrapper from "../../components/content-wrapper/content-wrapper";
import {Button} from "../../components/button";
import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
import {Input} from "../../components/input";
import {useDispatch, useSelector} from "react-redux";
import {createPlane} from "../../store/plane/planeSlice";
import {paths} from "../../paths";

export const CreatePlanePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {errors} = useSelector(state => state.plane)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [capacity, setCapacity] = useState('')
    const [planeImage, setPlaneImage] = useState(null)

    const handleCreatePlane = useCallback(() => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('capacity', capacity)
        formData.append('planeImage', planeImage)

        dispatch(createPlane(formData)).then(res => {
            if (!res.error) {
                navigate(`${paths.plane}/${res.payload._id}`, {replace: true})
            }
        })

    }, [name, price, description, capacity, planeImage])

    return (
        <ContentWrapper className={styles.createPlane}>
            <Button
                containerClassName={styles.backButtonContainer}
                onClick={() => navigate(-1)}
                isBackButton={true}
            >
                Назад
            </Button>
            <form className={styles.form}>
                <h1 className={styles.title}>Создать самолёт</h1>
                <Input
                    name='name'
                    placeholder='Название самолёта'
                    error={errors && errors.name && errors.name.message}
                    onchange={(e) => setName(e.target.value)}
                />
                <Input
                    name='price'
                    placeholder='Цена самолёта'
                    error={errors && errors.price && errors.price.message}
                    onchange={(e) => setPrice(e.target.value)}
                />
                <Input
                    name='description'
                    placeholder='Описание'
                    error={errors && errors.description && errors.description.message}
                    onchange={(e) => setDescription(e.target.value)}
                />
                <Input
                    name='capacity'
                    placeholder='Вместимость'
                    error={errors && errors.capacity && errors.capacity.message}
                    onchange={(e) => setCapacity(e.target.value)}
                />
                <Input
                    name='planeImage'
                    type='file'
                    placeholder='Вместимость'
                    error={errors && errors.planeImage && errors.planeImage.message}
                    onchange={(e) => setPlaneImage(e.target.files[0])}
                />
                <Button
                    containerClassName={styles.buttonContainer}
                    onClick={handleCreatePlane}
                >
                    Создать
                </Button>
            </form>
        </ContentWrapper>
    );
};