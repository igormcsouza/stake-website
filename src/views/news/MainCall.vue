<template>
  <div class="col-sm">
    <div class="card add-space">
      <div class="card-header" style="background-color: #fb8c502a;">{{ call.header }}</div>
      <div class="card-body">
        <div class="row">
          <div class="alignment">
            <img class="responsive-im" src="../../assets/logo-no-background.png" alt="image" />
            <p style="margin-left: 15px;">
              {{ call.body }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-body text-right">
        <a href="#" class="btn btn-primary">Saber Mais</a>
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