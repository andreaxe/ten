<template>
  <section>
    <h2>Switch</h2>
    <p>Para ligar/desligar o dispositivo</p>
    <button class="uk-button uk-button-default uk-width-1-1" @click="toogle">Carregar</button>
    <p>{{resposta}}</p>
    <img src='/src/assets/img/lightbulb_On.ico' v-if="light_on"/>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      'resposta': 'A iniciar o teste...',
      'light_on': false
    }
  },
  methods: {
    toogle () {
      this.resposta = ''
      axios
        .get('http://192.168.10.2/control?cmd=event,switchsonoff1')
        .then(response => { this.resposta = response; this.light_on = true })
    }
  }
}
</script>
