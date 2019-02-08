<template>
  <section>
    <h2>PIN</h2>
    <div class="uk-margin">
      <input class="uk-input" type="text" placeholder="Inserir o pin" v-model="pin" v-if="!light_on">
    </div>
    <progress id="js-progressbar" class="uk-progress" :value="time" max="100"></progress>
    <div class="uk-margin">
      <button v-bind:class="[light_on ? classObject.active : classObject.inactive]"
              :inactive="light_on" @click="toogle">Carregar</button>
    </div>
    <div uk-alert>
      <a class="uk-alert-close" uk-close></a>
      <h3>Resposta</h3>
      <p>{{resposta}}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      classObject: {
        inactive: 'uk-button uk-button-default',
        active: 'uk-button uk-button-danger'
      },
      light_on: false,
      resposta: '',
      isRunning: false,
      time: 0
    }
  },
  methods: {
    toogle () {
      if (this.light_on) {
        this.light_on = !this.light_on
        this.request()
      } else {
        this.verifyPin()
      }
    },
    verifyPin () {
      let correctPin = '1234'
      if (this.pin === correctPin) {
        this.toggleTimer()
        this.resposta = 'Pin correcto!!'
        this.light_on = !this.light_on
        this.request()
      } else {
        this.resposta = 'Pin incorrecto!'
      }
    },
    request () {
      axios.get('http://192.168.10.2/control?cmd=event,switchsonoff1').then(response => {
        this.resposta = response
      })
    },
    ready () {
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 100000)
      }, 1000)
    },
    toggleTimer () {
      if (this.isRunning) {
        clearInterval(this.interval)
        console.log('timer stopped')
      } else {
        this.interval = setInterval(this.incrementTime, 1000)
        console.log('timer started')
      }
      this.isRunning = !this.isRunning
    },
    incrementTime () {
      this.time = parseInt(this.time) + 10
      if (this.time >= 100) {
        this.time = 0
        this.resposta = 'Timer acabou!'
        this.isRunning = false
        clearInterval(this.interval)
        this.light_on = !this.light_on
        this.request()
      }
    }
  }
}
</script>
