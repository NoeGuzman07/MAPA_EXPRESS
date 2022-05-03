const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    })
);

const routerTaqueria = require('./routes/taquerias.router');

app.use('/api/v1/taquerias',routerTaqueria);
app.use(express.json());

app.get('/', (req,res) =>  {
    res.send('Hola estoy vivo en express en el puerto 3000')
});

app.listen(port, () => {
  console.log('Mi port:' + port);
  console.log('Entrar a la pagina para ver a todas las taquerias registradas: localhost:3000/api/v1/taquerias');
  console.log('Pagina para ver a la taqueria con un ID en particular: localhost:3000/api/v1/taquerias/X');
});
