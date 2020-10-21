import request from 'supertest';
import express from 'express';
import parse from '../src/modules/parse';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", parse);
describe(`Testing parse api`,()=>{
    
    it(`Valid input`, async()=>{
        const res = await request(app).post('/api/v1/parse').send({
            "data": "JOHN0000MICHAEL0009994567"
        });
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
            "status": 200,
            "data": {
                "firstName": "JOHN0000",
                "lastName": "MICHAEL000",
                "clientId": "9994567"
            }
        })
    })

    it(`Missing data in request`, async()=>{
        const res = await request(app).post('/api/v1/parse').send({});
        expect(res.status).toEqual(400);
        expect(res.body).toEqual({
            "err": "Invalid Request"
        })
    });    
})