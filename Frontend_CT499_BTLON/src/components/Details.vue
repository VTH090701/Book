<template>
    <Navbar />

    <div class="container mt-3">
        <h2>Chi tiết sách</h2>
       
        <h5>Tên sách: </h5>
        {{ book.name }}
        <hr>
        <h5>Tên tác giả: </h5>
        {{ book.author }}
        <hr>
        <h5>Năm xuất bản: </h5>
        {{ book.publish }}
        <hr>
        <h5>Nội dung: </h5>
        {{ book.content }}
    </div>
    <Footer/>

</template> 

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { onMounted } from 'vue'
export default {
    components: {
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
            // message: ''
        })
        onMounted(() => {
            getbyIdBooks()

        })
        async function getbyIdBooks() {
            const { id } = route.params
            const response = await fetch(`${API_URL}/${id}`)
            const json = await response.json()
            book.value = json
        }
        return {
            book,
        }
    }

}
</script>

<style>
.title p{
    font-weight: bold;
    font-size:12pt ;
}


</style>