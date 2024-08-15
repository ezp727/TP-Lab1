const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configuración
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/olympic-medals', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir el esquema y el modelo
const medalSchema = new mongoose.Schema({
    country: String,
    gold: Number,
    silver: Number,
    bronze: Number
});

const Medal = mongoose.model('Medal', medalSchema);

// Rutas
app.get('/medals', async (req, res) => {
    const medals = await Medal.find();
    res.json(medals);
});

app.post('/medals', async (req, res) => {
    const newMedal = new Medal(req.body);
    await newMedal.save();
    res.status(201).json(newMedal);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
