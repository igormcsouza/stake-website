<template>
  <div id=app>
    <stake-menu-bar />
    <stake-home />
  </div>
</template>
  
<script>
import StakeMenuBar from './components/MenuBar.vue'
import StakeHome from './components/home/main.vue'

export default {
  name: 'App',
  components: {
    StakeMenuBar, 
    StakeHome
  }
}
</script>

<style></style>
