<template>
  <div class="card" style="border-radius: 8px;">
    <div class="card-header" style="background-color: #fb8c502a;">{{ info.topic }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>"{{ info.text }}"</p>
        <footer class="blockquote-footer">
          {{ info.author }}
          <cite title="Source Title"></cite>
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
	name:"StakeMsg",
	props: {
		info: {
			required: true
		}
	}
}
</script>
