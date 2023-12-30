<template>
  <Navbar />
  <div class="container mt-3">
    <div class="" style="display: flex;">
      <h2 class="">Hello Admin: {{ name }}</h2>
      <button @click="logout" class="mt-3 btn btn-warning" style="margin-left: auto;"><i class="fa fa-sign-out"
          aria-hidden="true"></i> Đăng xuất</button>
    </div>
    <BookList class="mt-3" />

  </div>
  <Footer/>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BookList from '../components/BookList.vue'
import axios from 'axios';
import Footer from '@/components/Footer.vue'

export default {
  components: {
    BookList,
    Navbar,
    Footer
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') == null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:5000/users/user', { headers: { token: localStorage.getItem('token') } })
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }

}
</script>

<style></style>