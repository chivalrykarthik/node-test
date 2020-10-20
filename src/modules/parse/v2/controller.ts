import {Request, Response} from 'express';
import {Result} from './../../../model';
const controller = (req:Request): Result=>{
    if(!req?.body?.data) throw new Error(`Invalid Request`);
    const {body} = req;
    const regex = /0{3,4}/g;    
    const [firstName,lastName,id] = body.data.split(regex);
    const clientId = id.substring(0, 3) + '-' + id.substr((3-id.length));
    const result: Result = {firstName,lastName,clientId};
    return result;
}

export default controller;