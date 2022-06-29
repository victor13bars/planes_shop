const Planes = require('../models/plane');

const getPlanes = async (req, res) => {
    try {
        const planes = await Planes.find();

        res.status(200).json(planes)
    } catch (e) {
        res.status(500).json({message: "Не удалось получить список самолетов, повторите попытку"});
    }
};

const getPlane = async (req, res) => {
    try {
        const plane = await Planes.find({_id: req.params.id});

        res.status(200).json(plane)
    } catch (e) {
        res.status(400).json({message: "Самолёт не найден, повторите попытку"});
    }
};

const createPlane = async (req, res) => {
    const errors = {};

    if (!req.body.name) {
        errors.name = {message: 'Укажите имя'}
    }
    if (!req.body.price) {
        errors.price = {message: 'Укажите цену'}
    }
    if (!req.body.description) {
        errors.description = {message: 'Укажите описание'}
    }
    if (req.body.description && req.body.description.length > 500) {
        errors.description = {message: 'Слишком большое описание'}
    }
    if (!req.body.capacity) {
        errors.capacity = {message: 'Укажите число мест'}
    }
    if (req.body.capacity && req.body.capacity.length > 2) {
        errors.capacity = {message: 'Число мест не может быть больше 99'}
    }
    if (!req.file) {
        errors.planeImage = {message: 'Укажите фото самолёта'}
    }
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }

    try {
        const {name, price, description, capacity} = req.body;

        const plane = await Planes.create({
            name,
            price,
            description,
            capacity,
            planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        });

        res.status(201).json(plane)
    } catch (e) {
        res.status(500).json({message: "Не удалось создать, повторите попытку"});
    }
};

module.exports = {
    getPlanes,
    createPlane,
    getPlane
}