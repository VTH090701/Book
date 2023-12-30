<template>
    <table class="table table-striped">
        <thead>
            <tr>

                <th scope="col">Tên sách</th>
                <th scope="col">Tác giả</th>
                <!-- <th scope="col">Năm xuất bản</th> -->
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody v-for="book in books" :key="book._id">
            <tr>
                <td> {{ book.name }}</td>
                <td> {{ book.author }}</td>
                <!-- <td> {{ book.publish }}</td> -->
                <td>
                    <button @click="editBook(book._id)" class="btn btn-success"><i class="fa fa-pencil"
                            aria-hidden="true"></i> Edit</button>
                    | <button @click="removeBook(book._id)" class="btn btn-danger"><i class="fa fa-trash"
                            aria-hidden="true"></i> Delete</button> | <button @click="getbyId(book._id)"
                        class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i> Details</button>
                </td>
            </tr>

        </tbody>
        <tr>
            <td>
                <button @click="removeallBook()" class="btn btn-outline-danger">Xóa tất cả</button>
            </td>
        </tr>
    </table>
</template>

<script>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';

export default {

    setup() {
        const router = useRouter()
        const books = ref([])
        const API_URL = 'http://localhost:5000/books/'
        onMounted(() => {
            getBooks();
        })
        async function getBooks() {
            try {
                const response = await fetch(API_URL)
                const json = await response.json()
                books.value = json
            } catch (error) {
                console.log(error)
            }

        }
        async function removeBook(_id) {

            // const token = localStorage.getItem('token');

            const choice = confirm("Bạn chắc chắn muốn xóa");
            if (choice == true) {
                const response = await fetch(`${API_URL}/${_id}`, {
                    method: 'DELETE',
                })
            } else {
            }
            getBooks()
        }
        async function removeallBook() {
            const choice = confirm("Bạn chắc chắn muốn tất cả xóa");
            if (choice == true) {
                const response = await fetch(API_URL, {
                    method: 'DELETE',
                })
            } else {
            }
            getBooks()

        }
        async function editBook(_id) {
            router.push({
                name: 'Update',
                params: {
                    id: _id,

                }
            })
        }
        async function getbyId(_id) {
            router.push({
                name: 'Details',
                params: {
                    id: _id,

                }
            })
        }
        return {
            books,
            removeBook,
            editBook,
            removeallBook,
            getbyId
        }
    },


}
</script>

<style></style>