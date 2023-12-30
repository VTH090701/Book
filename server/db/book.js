import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    publish: {
        type: String,
        require: true,
    },
    content:{
        type: String,
        require: true,
    }
});


const Book = mongoose.model('book', bookSchema);

export default Book ; 
