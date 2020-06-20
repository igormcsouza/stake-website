<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom: 50px">
    <a class="navbar-brand" href="/">
			<img src="../assets/logo-no-background.png" width="20" height="25" alt="logo">
		</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/agenda">Agenda</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/messages">Mensagens</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/newsletter">News</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "StakeMenuBar",
};
</script>

<style></style>
