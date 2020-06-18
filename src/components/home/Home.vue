<template>
	<div>
		<div class="white-square">
			<stake-agenda />
		</div>
		<div class="white-square">
			<stake-news />
		</div>
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
