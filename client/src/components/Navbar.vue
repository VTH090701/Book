<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <a class="navbar-brand" href="#">Home</a> -->

    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <a class="navbar-brand" href="#" style="font-weight:bold ;">Ứng dụng quản lý sách</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
 
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link to="/" class="navbar-brand">
              <i class="fa fa-home" aria-hidden="true"></i> Home
            </router-link>
            <span class="sr-only">(current)</span></a>
        </li>

      </ul>
      <div class="">
        <router-link to="/create" class="btn btn-secondary">
          <strong><i class="fa fa-plus" aria-hidden="true"></i> Create</strong>
        </router-link>

      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style></style>