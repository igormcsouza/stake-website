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

<style>
.white-square {
	margin: 50px;
	padding: 10px 10px;
	border-radius: 16px;
	background-color: #ffffff;
}
</style>
