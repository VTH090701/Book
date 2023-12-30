<template>
    <Navbar />
    <BookForm :book="book" :submitForm="createBook" />
    <!-- {{ message1 }} -->
    <!-- <p>{{ message1 }}</p> -->
    <Footer/>

</template>

<script>
import BookForm from '../components/BookForm.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    components: {
        BookForm,
        Navbar,
        Footer
    },
    
    setup() {
        const API_URL = 'http://localhost:5000/books/'
        const router = useRouter()
        
        const book = reactive({
            name: '',
            author: '',
            publish: '',
            content: ''
        })

        async function createBook() {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: book.name,
                        author: book.author,
                        publish: book.publish,
                        content: book.content

                    })
                })
                const json = await response.json()

                console.log(json);
                alert("Thêm thành công");
                router.push({
                    name: 'Home',
                })
            } catch (error) {
                console.log(error)
            }
        }
        return {
            book,
            createBook,
        }
    }
}
</script>

<style></style>