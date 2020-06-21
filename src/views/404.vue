<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>Oops! 404</h1>
          <h4 class="error-details">A página em questão não foi encontrada.</h4>
          <div class="error-actions">
            <a href="/" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-home"></span>
              Voltar ao Início
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-template {
	padding: 40px 15px;
	text-align: center;
}
.error-actions {
	margin-top: 30px;
	margin-bottom:15px;
}
.error-actions .btn { 
	margin-right:10px; 
}
</style>