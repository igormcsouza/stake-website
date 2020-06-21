<template>
  <div class="col-sm">
    <div class="card add-space">
      <div class="card-header" style="background-color: #fb8c502a;">{{ call.header }}</div>
      <div class="card-body">
        <div class="row">
          <div class="alignment">
            <div class="image-body">
              <img class="responsive-im" :src="call.im" style="border-radius: 32px" alt="image" />
            </div>
            <p style="margin-left: 15px;">
              {{ call.body }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-body text-right">
        <a :href="call.link" class="btn btn-primary">Saber Mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"StakeMainCall",
  props: {
    call: {
      required: true
    }
  }
}
</script>

<style scoped>
.responsive-im {
  width: 150px;
  height: auto;
}
.image-body {
  width: 200px;
  height: 250px;
  border: 1px;
  padding: 5px;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .responsive-im {
    width: 75px;
    height: auto;
  }
}
</style>