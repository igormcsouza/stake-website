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
      <stake-secondary-call :call="om"/>
      <stake-secondary-call :call="or"/>
      <stake-secondary-call :call="hf"/>
      <stake-secondary-call :call="au"/>
    </div>
  </div>
</template>

<script>
import StakeMainCall from './MainCall'
import StakeSecondaryCall from './SecondaryCall'

import quorumIm from './../../assets/quorum.png'
import socsocIm from './../../assets/socsoc.png'

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
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl eros, fermentum id posuere vestibulum, sagittis suscipit nisi. Sed nulla ante, tristique volutpat interdum eu, molestie nec augue. Sed placerat.',
        im: quorumIm,
        link: '/news/elders-quorum'
			},
			socsoc: {
				id: 2, 
				header: 'Sociedade de Socorro', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl eros, fermentum id posuere vestibulum, sagittis suscipit nisi. Sed nulla ante, tristique volutpat interdum eu, molestie nec augue. Sed placerat.',
        im: socsocIm,
        link: '#'
			},
      om: {
				id: 3, 
				header: 'Organização das Moças', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat rutrum rhoncus.'
			},
      or: {
				id: 4, 
				header: 'Organização dos Rapazes', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat rutrum rhoncus.'
			},
      hf: {
				id: 5, 
				header: 'História da Família', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat rutrum rhoncus.'
			},
      au: {
				id: 6, 
				header: 'Autossuficiência', 
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat rutrum rhoncus.'
			}
      
		}
	}
};
</script>

<style>
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
}
</style>