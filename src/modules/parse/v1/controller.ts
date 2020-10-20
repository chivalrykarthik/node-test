import {Request, Response} from 'express';
import {Result} from './../../../model';

const controller = (req:Request): Result=>{
    if(!req?.body?.data) throw new Error(`Invalid Request`);
    const {body} = req;
    const {data} = body;
    const regex = /^[A-Za-z0-9](.*?)(0{3,4})/g;
    const [firstName] = data.match(regex);
    const [lastName] = data.replace(firstName,'').match(regex);
    const clientId = data.replace(firstName+lastName,'');        
    const result: Result = {firstName,lastName,clientId};
    return result;
}
export default controller;