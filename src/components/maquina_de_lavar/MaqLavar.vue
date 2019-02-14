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
          <div class="uk-width-1-1">
            <input class="uk-input uk-margin-small-bottom uk-margin-small-top" type="text" placeholder="Inserir o pin" v-model="pin" v-if="!light_on"/>
            <datetime type="datetime" v-model="datetime" input-class="uk-input"></datetime>
            <hr>
            <progress id="js-progressbar" class="uk-progress" :value="time" max="100"></progress>
            <button v-bind:class="[light_on ? classObject.active : classObject.inactive]"
                    :inactive="light_on" @click="toogle"
                    class="uk-margin-small-right uk-float-right  uk-margin-small-top">Agendar</button>
            <button class="uk-button uk-button-secondary uk-margin-small-top uk-margin-small-right uk-float-right">Desligar equipamento</button></div>
            </div>
        </div>
        <div class="uk-grid">
          <div class="uk-width-1-1">
            <h4>Estado do equipamento</h4>
            <button class="uk-button-primary">{{ light_on ? 'Ligado' : 'Desligado'}}</button>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
  import { Datetime } from 'vue-datetime';
  import DateTimePicker from 'vue-vanilla-datetime-picker';
  import axios from 'axios'
  import 'vue-datetime/dist/vue-datetime.css'

  export default {
    components: {
      datetime: Datetime,
      dateTimePicker: DateTimePicker
    },
    data(){
      return {
        pin: '',
        datetime: '',
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
          this.light_on = !this.light_on;
          this.request()
        } else {
          this.verifyPin()
        }
      },
      verifyPin () {
        let correctPin = '1234';
        if (this.pin === correctPin) {
          this.toggleTimer();
          this.resposta = 'Pin correcto!!';
          this.light_on = !this.light_on;
          this.request()
        } else {
          alert("Pin incorrecto!");
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
          clearInterval(this.interval);
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

<style scoped>

</style>
