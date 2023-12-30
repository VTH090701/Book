import express from "express";
import mongoose from "mongoose";
import User from "../db/user.js";
// const User = require('../db/model.js');


// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router()

router.post("/register", function (req, res) {
    try {
        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
        });
        newUser.save()
        return res.status(200).json(newUser)
        
    } catch (error) {
        console.log(error)

    }

});
router.post("/login", function (req, res) {

    User.findOne({ email: req.body.email })
        .then((result) => {
            if (!result) {
                return res.status(401).json({
                    title: 'User not found',
                    error: 'invalid credentials'
                })
            }
            if (!bcrypt.compareSync(req.body.password, result.password)) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: 'invalid credentials'
                })
            }
            else {
                let token = jwt.sign({ userId: result._id }, 'secretkey');
                return res.status(200).json({
                    title: 'login success',
                    token: token
                })
            }

        })
        .catch((err) => {
            if (err)
                return res.status(500).json({
                    title: 'server error',
                    error: err
                })
        });



});


router.get('/user', (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })
        User.findOne({ _id: decoded.userId })
            .then((result) => {
                if (err) return console.log(err)
                else {
                    return res.status(200).json({
                        title: 'user grabbed',
                        user: {
                            email: result.email,
                            name: result.name
                        }
                    })
                }
            })
    })

});

export default router