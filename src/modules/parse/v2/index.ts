import express, {Router, Request, Response} from 'express';
import controller from './controller';
import {Result} from './../../../model';

const router: Router = express.Router();

router.post('/parse',(req: Request, res: Response)=>{
    try{
        const data: Result = controller(req);
        res.status(200).send({status:200, data});
    } catch(e){
        res.status(400).send({err:e.message});
    }
});

export default router;