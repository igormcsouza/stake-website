<template>
  <div class="col-sm">
    <div class="card add-space">
      <div class="card-header" style="background-color: #fb8c502a;">{{ call.header }}</div>
      <div class="card-body">
        <div class="row">
          <div class="alignment">
            <p style="margin-left: 15px; font-size: 75%;">{{ call.body }}</p>
          </div>
        </div>
      </div>
      <div class="text-right" style="margin: 10px">
        <a href="#" class="btn btn-primary">Saber Mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"StakeSecondaryCall",
  props: {
    call: {
      required: true
    }
  }
}
</script>