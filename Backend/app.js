// npm i express mongoose jsonwebtoken bcrypt cookie-parser dotenv cors
import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";

connect();
//initialized app
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.send('Hello World!');
})
export default app;