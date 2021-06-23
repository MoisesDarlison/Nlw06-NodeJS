import express from 'express';
import './config/configEnv';
import './config/configDatabase';
import 'reflect-metadata';

const {PORT_SERVER = 3000} = process.env
const app = express();

app.get('/',(request, response)=>{ 
    return response.send("Rota get");
});
 
app.listen(PORT_SERVER, ()=> console.log(`Listen in port ${PORT_SERVER}`))