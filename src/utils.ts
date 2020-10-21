import path from 'path';
import dotenv from 'dotenv';

const appEnv = process.env.NODE_ENV || 'dev';

const configFile = `./config/env.${appEnv}.txt`;

const configPath = path.join(process.cwd(),configFile);

dotenv.config({path:configPath});

export const getEnvVal = (key: string)=>{
    return process.env[key] || '';
}


