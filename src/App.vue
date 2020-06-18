<template>
  <div id=app>
    <stake-menu-bar />
    <router-view></router-view>
    <stake-footer />
  </div>
</template>
  
<script>
import StakeMenuBar from './components/MenuBar'
import StakeFooter from './components/footer/Footer'

export default {
  name: 'App',
  components: {
    StakeMenuBar,
    StakeFooter
  }
}
</script>

<style></style>
