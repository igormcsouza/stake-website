<template>
  <div id=app>
    <stake-menu-bar 
      @selectTab="selectedTab = $event"
    />
    <component :is="selectedTab"></component>
  </div>
</template>
  
<script>
import StakeMenuBar from './components/MenuBar.vue'
import StakeHome from './components/home/Home.vue'
import StakeMessages from './components/messages/Messages.vue'
import StakeAgenda from './components/agenda/Agenda.vue'

export default {
  name: 'App',
  components: {
    StakeMenuBar, 
    StakeHome,
    StakeMessages,
    StakeAgenda
  }, 
  data() {
    return {
      selectedTab: 'StakeHome',
    }
  }
}
</script>

<style>
.white-square {
	margin: 30px 50px;
	padding: 25px 10px;
	border-radius: 16px;
	background-color: #ffffff;
}
</style>
