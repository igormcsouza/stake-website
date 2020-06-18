<template>
  <div class="container" style="max-width: 800px;">
    <h1 class="my-4" style="color: #FB8B50;">
      Mensagens Inspiradoras
      <small></small>
    </h1>
    <stake-msg v-for="msg in msgs" :key="msg.id" :info="msg"></stake-msg>
  </div>
</template>
<script>

import StakeMsg from './Msg'

export default {
  name: "StakeMessages",
  components: {
    StakeMsg
  },
  data() {
    return {
      msgs: [
        {
          id: 1,
          topic: "Lembrete",
          text: "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
          author: "Arthur Ashe"
        },
        {
          id: 2,
          topic: "Inspiração",
          text: "2 E acontecerá nos últimos dias que o monte da casa do Senhor se firmará no cume dos montes, e se exalçará por cima dos outeiros; e concorrerão a ele todas as nações.",
          author: "Isaías 2"
        },
      ]
    }
  }
}
</script>

<style scoped>
div ~ div {
  margin-top: 15px;
}
</style>