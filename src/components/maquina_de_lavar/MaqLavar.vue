<template>
  <section id="content">
    <div class="uk-grid">
      <div class="uk-width-1-1">
        <h3>Máquina de Lavar</h3>
        <hr>
        </div>

    </div>
    <div class="uk-grid">
      <div class="uk-width-1-1"><img src="/static/assets/img/wash.png" style="max-height: 150px;" class="uk-float-left" /></div>
      <div class="uk-width-1-1">
        <div class="uk-grid">
          <div class="uk-width-1-1"><h4>Agendamento</h4></div>
          <div class="uk-width-1-1"><datetime v-model="datetime" input-class="uk-input"></datetime>
            <button class="uk-button uk-button-default uk-margin-small-top uk-float-right">Agendar</button>
            <button class="uk-button uk-button-secondary uk-margin-small-top uk-margin-small-right uk-float-right">Desligar equipamento</button></div>
            </div>
        </div>
        <div class="uk-grid">
          <div class="uk-width-1-1">
            <h4>Estado do equipamento</h4>
            <button class="uk-button-primary">Ligado</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Datetime } from 'vue-datetime';
  // You need a specific loader for CSS files
  import 'vue-datetime/dist/vue-datetime.css'

  export default {
    components: {
      datetime: Datetime
    },
    data(){
      return {
        'datetime': ''
    }
    },
  }
</script>

<style scoped>

</style>
