<template>

    <div class="container mt-3">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label>Tên sách</label>
                <input type="text"  v-model="book.name" class="form-control" placeholder="Nhập tên sách" required>
            </div>
            <div class="form-group">
                <label>Tên tác giả</label>
                <input type="text"  v-model="book.author" class="form-control" placeholder="Nhập tên tác giả" required>
            </div>
            <div class="form-group">
                <label>Năm xuất bản</label>
                <input type="text"  v-model="book.publish" class="form-control" placeholder="Nhập năm xuất bản" required>
            </div>
            <div class="form-group">
                <label>Nội dung</label>
                <textarea class="form-control" v-model="book.content" placeholder="Nhập nội dung"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['book', 'submitForm'],
}
</script>

<style></style>