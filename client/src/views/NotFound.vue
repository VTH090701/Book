<template>
      <div class="container-fluid">
        <img src="../assets/4041.png" >
        <p class="mt-3">
            Oops, không thể tìm thấy trang. Trở về
            <div class="button_customer">
                <router-link to="/" style="color: white;">Trang chủ.</router-link>
            </div>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container-fluid p{
    text-align: center;
}
img{
    width:100%;
}
.button_customer{
    margin: 0 auto;
    border-radius:5px ;
    padding: 7px;
    width: 100px;
    background: rgb(76, 178, 233);
    color: white;
}
</style>