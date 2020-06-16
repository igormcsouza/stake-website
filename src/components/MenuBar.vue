<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
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
        <li class="nav-item active">
          <a class="nav-link" href="#home" @click="selectTab('StakeHome')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#agenda" @click="selectTab('StakeAgenda')">Agenda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#messages" @click="selectTab('StakeMessages')">Mensagens</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "StakeMenuBar",
  methods: {
    selectTab(event){
      this.$emit('selectTab', event)
    }
  }
};
</script>

<style></style>
