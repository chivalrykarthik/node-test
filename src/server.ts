import express, {Application, Request, Response} from 'express';
import parse from './modules/parse';

// Connection
const PORT = 3000;
const HOST_IP = `localhost`;

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