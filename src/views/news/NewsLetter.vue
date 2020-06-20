<template>
  <div class="container">
    <h1 class="my-4" style="color: #FB8B50;">Jornal da Estaca Montese</h1>

    <!-- First Row (Q e SS) -->
    <div class="row">
      <stake-main-call :call="quorum"/>
      <stake-main-call :call="socsoc"/>
    </div>

    <hr />

    <!-- Second Row (OM, OR, HF, AU) -->
    <div class="row">
      <stake-secondary-call />
      <stake-secondary-call />
      <stake-secondary-call />
      <stake-secondary-call />
    </div>
  </div>
</template>

<script>
import StakeMainCall from './MainCall'
import StakeSecondaryCall from './SecondaryCall'

export default {
	name: "StakeNewsLetter",
	components: {
		StakeMainCall,
		StakeSecondaryCall
	},
	data() {
		return {
			quorum: {
				id: 1, 
				header: 'Quórum de Élderes', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl eros, fermentum id posuere vestibulum, sagittis suscipit nisi. Sed nulla ante, tristique volutpat interdum eu, molestie nec augue. Sed placerat.'
			},
			socsoc: {
				id: 2, 
				header: 'Sociedade de Socorro', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl eros, fermentum id posuere vestibulum, sagittis suscipit nisi. Sed nulla ante, tristique volutpat interdum eu, molestie nec augue. Sed placerat.'
			}
		}
	}
};
</script>

<style>
.responsive-im {
  width: 150px;
  height: auto;
}
.responsive-im-secondary {
  width: 75px;
  height: auto;
}
.alignment {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .alignment {
    display: flex;
    flex-direction: column;
  }
  .add-space {
    margin-top: 15px;
  }
  .responsive-im {
    width: 75px;
    height: auto;
  }
  .responsive-im-secondary {
    width: 75px;
    height: auto;
  }
}
</style>