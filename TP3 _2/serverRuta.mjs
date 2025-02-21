import express from 'express';

const app = express();
const PORT = 3000;

// ruta GET con parametro de ruta 
// solicitud: http://localhost:3000/user/123 

app.get('/user/:id', (req,res) => {
    const userId = req.params.id;
    console.group(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del ususatio con ID: ${userId}`);
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});