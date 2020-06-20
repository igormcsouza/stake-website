<template>
  <div class="container alignment">
    <img 
			class="card-img-top responsive-im" 
			src="../../assets/logo-no-background.png" 
			alt="Card image cap" 
		/>
    <div class="card-body">
      <h2 style="text-align: center;">
				Estaca Montese de A Igreja de Jesus Cristo dos Santos dos Últimos Dias
			</h2>
    </div>
  </div>
</template>

<script>
export default {
	name: "StakeHeader"
}
</script>

<style scoped>
.responsive-im {
	width: 250px;
	height: auto;
}
.alignment {
	display: flex;
	align-items: center;
	justify-items: center;
}
@media screen and (max-width: 800px) {
	.alignment {
		display: flex;
		flex-direction: column;
	}
	.responsive-im {
		width: 150px;
		height: auto;
	}
}
</style>