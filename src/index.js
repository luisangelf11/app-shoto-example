import {Application, UploadFile } from 'shoto-js'
import home from './routes/homeRoute.js';
import person from './routes/personRoute.js';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';

const app = new Application(3000);
//Upload file
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileTypeRegex = /jpg|png|jpeg|gif|JPG|PNG/
const pathFile = join(__dirname, '/uploads')
const uploadFile = new UploadFile(pathFile, fileTypeRegex)
uploadFile.uploadRoute('/upload', 'file', 'localhost:3000', 'upload')

//Routes
app.runRoute(uploadFile.uploadRoutes)//Router for upload a single file with post method
app.runRoute(person.router)
app.runRoute(home.router) //Home router is the end router for call

//Run server
app.listen()