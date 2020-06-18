<template>
	<div>
		<stake-news />
		<stake-agenda />
	</div>
</template>
  
<script>
import StakeNews from "./news/News.vue"
import StakeAgenda from "./agenda/Agenda.vue"

export default {
  name: "StakeHome",
  components: {
		StakeNews,
		StakeAgenda
  }
};
</script>

<style></style>
