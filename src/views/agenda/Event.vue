<template>
	<div class="row row-striped">
		<div class="col-2 text-right" style="display: flex; align-items: center; flex-direction: column">
			<h3 class="display-4"><span class="badge badge-secondary" style="background-color: #6D8AFC;">{{ info.day }}</span></h3>
			<h4>{{ info.month }}</h4>
		</div>
		<div class="col-10">
			<h5 class="text-uppercase"><strong>{{ info.title }}</strong></h5>
			<ul class="list-inline">
				<li class="list-inline-item"><i class="fa fa-calendar-o" aria-hidden="true"></i> {{ info.weekday }}</li>
				<li class="list-inline-item"><i class="fa fa-clock-o" aria-hidden="true"></i> {{ info.time }}</li>
				<li class="list-inline-item"><i class="fa fa-location-arrow" aria-hidden="true"></i> {{ info.place }}</li>
			</ul>
			<p>{{ info.subtitle }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "StakeEvent",
	props: {
		info: {
			required: true
		}
	}
}
</script>

<style scoped>
.row-striped:nth-of-type(odd){
  border-radius: 6px;
  background-color: #fb8c502a;
  border-left: 4px #6D8AFC solid;
}

.row-striped:nth-of-type(even){
  background-color: #ffffff;
  border-left: 4px #efefef solid;
}

.row-striped {
    padding: 15px 0px;
}
</style>