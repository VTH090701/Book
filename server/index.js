import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerBook from './router/book.js';
import routerUser from './router/user.js';
import bodyParser from 'body-parser';

const app = express()
app.use(cors())
app.use(express.json())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config()

app.use('/books',routerBook)
app.use('/users',routerUser)


app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(console.log('connect to db'))
        .catch((err) => console.log(err))
})