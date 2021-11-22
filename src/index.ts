import URLController from './controller/urlController';
import express from "express";
import MongoConnection from './database/mongoConnection';

const api = express();

api.use(express.json());

const urlController = new URLController();
const db = new MongoConnection();

db.connect();

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Escutando a porta 5000'));