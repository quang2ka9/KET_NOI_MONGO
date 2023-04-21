import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/router/router";
import session from 'express-session';
import methodOverride from 'method-override'

const app = express();

const DB_URL = 'mongodb://127.0.0.1:27017/c12';
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.set('views', 'src/view');
app.set('view engine', 'ejs');
app.use(express.static('/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));



app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Ning',
    cookie: { maxAge: 6000000 }}));

app.use('', router)
app.listen(3000, () => {
    console.log('Server is running')
})