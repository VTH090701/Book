import express from "express";


import mongoose from "mongoose";
import Book from "../db/book.js";

import User from "../db/user.js";
import jwt from 'jsonwebtoken';

// const Book = require('../db/model.js');
const router = express.Router()



router.get('/', async (req, res) => {
    try {
        const allBooks = await Book.find()
        res.json(allBooks)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) return
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
    }
})




router.post('/', async (req, res) => {
    try {
        const book = req.body
        const createdBook = await Book.create(book)
        res.status(201).json({ message: "Thêm thành công" })
    } catch (error) {
        console.log(error)
    }

})
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, author, publish,content } = req.body
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('book không tồn tại')

        const updatedBook = { name, author, publish,content, _id: id }
        await Book.findByIdAndUpdate(id, updatedBook, { new: true })
        res.json({ message: "Cập nhật thành công" })
        // return res.status(200).json({
        //     message: 'Cập nhật thành công',

        // })
    } catch (error) {
        console.log(error)

    }
})
router.delete('/:id', async (req, res) => {
    // let token = req.headers.token; 
    // console.log(token)
  
    try {
        const { id } = req.params
        await Book.findByIdAndRemove(id)
        res.json({ message: "Xoá thành công" })
    } catch (error) {
        console.log(error)

    }
})
router.delete('/', async (req, res) => {
    try {
        const deleteallbook = await Book.deleteMany({})
        res.status(201).json({ message: "Xóa tất cả thành công" })
    } catch (error) {
        console.log(error)

    }
})
export default router