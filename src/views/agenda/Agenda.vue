<template>
  <div class="container adding-margins">
    <h1 class="my-4" style="color: #FB8B50;"> Calendário da Estaca </h1>
    <div class="container">
      <template v-for="(event, key) in events">
        <stake-event :info="event" :key="key" />
      </template>
    </div>
  </div>
</template>

<script>
import StakeEvent from "./Event";

export default {
  name: "StakeEntry",
  components: {
    StakeEvent
  },
  data() {
    return {
      events: [
        {
          day: "18",
          month: "Junho",
          time: "8h",
          weekday: "Sábado",
          place: "Estaca",
          title: "Atividade Mãos que Ajudam",
          subtitle: "Doação de Mascaras no dia 18 de julho à comunidade."
        },
        {
          day: "03",
          month: "Outubro",
          time: "13h",
          weekday: "Sábado",
          place: "Online",
          title: "Conferência Geral",
          subtitle:
            "Nos dias 03 e 04 de outubro teremos nossa Conferência Geral."
        },
        {
          day: "25",
          month: "Agosto",
          time: "19h",
          weekday: "Terça",
          place: "Estaca",
          title: "Atividade de Casais",
          subtitle: "Em agosto, fique atento para mais informações."
        }
      ]
    };
  }
};
</script>

<style scoped>
.adding-margins {
	padding: 0px 50px;
}

@media screen and (max-width: 800px) {
	.adding-margins {
		padding: 0px 10px;
	}
}
</style>