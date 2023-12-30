<template>
    <!-- <div>
        Name:<input type="text" v-model="name">
        Email:<input type="text" v-model="email">
        Password:<input type="text" v-model="password">
        <button @click="register">Đăng ký</button>
    </div> -->
    <div class="">
        <!-- Section: Design Block -->
        <section class="text-center">
            <!-- Background image -->
            <div class="p-5 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        "></div>
            <!-- Background image -->

            <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
                <div class="card-body py-5 px-md-5">

                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h2 class="fw-bold mb-5">Sign In now</h2>
                            <!-- 2 column grid layout with text inputs for the first and last names -->

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="text" v-model="name"  class="form-control" required />
                                <label class="form-label" >Name</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="email" v-model="email"  class="form-control" required />
                                <label class="form-label" >Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" v-model="password"  class="form-control" required />
                                <label class="form-label">Password</label>
                            </div>
                            <div class="text-center">
                                <p>Bạn đã có tài khoản ?
                                    <router-link to="/login">
                                        <strong>Sign Up</strong>
                                    </router-link>
                                </p>
                            </div>
                            <!-- Submit button -->
                            <button type="submit" @click="register" class="btn btn-primary btn-block mb-4">
                                Sign In
                            </button>
                            <!-- Register buttons -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',

        }
    },
    methods: {
        register() {
            let newUser = {
                name: this.name,
                password: this.password,
                email: this.email
            };
            axios.post('http://localhost:5000/users/register', newUser)
                .then(res => {
                    console.log(res);
                    this.$router.push('/login');
                }, err => {
                    console.log(err.response)
                }
                )
        }
    }
}
</script>

<style>
input {
    display: block;

}

</style>