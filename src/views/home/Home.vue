<template>
	<div>
		<stake-header />
		<stake-news />
		<stake-agenda />
	</div>
</template>
  
<script>
import StakeNews from "./news/News.vue"
import StakeAgenda from "./agenda/Agenda.vue"
import StakeHeader from "./Header.vue"

export default {
  name: "StakeHome",
  components: {
		StakeNews,
		StakeAgenda,
		StakeHeader
  }
};
</script>

<style></style>
