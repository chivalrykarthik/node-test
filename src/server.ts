import express, {Application, Request, Response} from 'express';
import parse from './modules/parse';
import {getEnvVal} from './utils';

// Connection
const PORT:any = getEnvVal('PORT');
const HOST_IP:any = getEnvVal('IP');

const app: Application = express();

// Adding body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Adding routes
app.use('/api',parse);

// 404
app.use((req: Request,res: Response)=>{
    res.status(404).send({err:`Not found`});
})

app.listen(PORT,HOST_IP,()=>console.log(`App running at ${HOST_IP}:${PORT}`));