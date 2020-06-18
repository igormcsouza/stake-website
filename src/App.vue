<template>
  <div id=app>
    <stake-menu-bar />
    <router-view></router-view>
  </div>
</template>
  
<script>
import StakeMenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    StakeMenuBar,
  }
}
</script>

<style>
.white-square {
	margin: 30px 50px;
	padding: 25px 25px;
	border-radius: 16px;
	background-color: #ffffff;
}
</style>
