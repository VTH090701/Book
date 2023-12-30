<template>
    <Navbar />
    <!-- {{ message }} -->
    <BookForm :book="book" :submitForm="updateBook" />
    <Footer/>

</template>

<script>
import BookForm from '../components/BookForm.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { onMounted } from 'vue'

export default {
    components: {
        BookForm,
        Navbar,
        Footer
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const API_URL = 'http://localhost:5000/books/'

        const book = ref({
            name: '',
            author: '',
            publish: '',
            content: ''
            // message: ''
        })
        onMounted(() => {
            getBooks()
        })
        async function getBooks() {
            const { id } = route.params
            const response = await fetch(`${API_URL}/${id}`)
            const json = await response.json()
            book.value = json
        }
        async function updateBook() {
            try {
                const { id } = route.params
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: book.value.name,
                        author: book.value.author,
                        publish: book.value.publish,
                        content: book.value.content

                    })
                })
                const json = await response.json()
                // this.message = response.json()
                console.log(json)
                alert("Cập nhật thành cộng");
                router.push({
                    name: 'Home',
                })
            } catch (error) {
                console.log(error)
            }


        }
        return {
            book,
            updateBook,
        }
    }
}
</script>

<style></style>