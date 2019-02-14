<template>
  <section>
    <h3>Consumos actuais</h3>
    <apexchart width="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
    <h2>Switch</h2>
    <p>Para ligar/desligar o dispositivo</p>
    <v-select v-model="selected" :options="equipamentos" @click=""></v-select>

    <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-top" @click="toogle">Ligar</button>
    <button class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top" @click="myStopFunction()">Parar</button>

    <p id="seconds"></p>
    <p>{{selected}}</p>
    <p>{{myTimer}}</p>
    <img src='/static/assets/img/lightbulb_On.ico' v-if="light_on"/>
  </section>
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
import vSelect from 'vue-select'

export default {
  components:{
    'apexchart': VueApexCharts,
    'v-select': vSelect
  },
  data () {
    return {
      'dataChart': [0, 0, 0, 0, 0, 0],
      'myTimer': 0,
      'resposta': 'A iniciar o teste...',
      'light_on': false,
      'selected': '',
      'equipamentos': ['cilindro', 'máquina de lavar', 'forno'],

      'estado_equipamentos': {
        'cilindro': {on: false, timer: 0},
        'maqLavar': {on: false, timer: 0},
        'forno': {on: false, timer: 0}},

      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Iluminação', 'Equipamentos', 'Máquina de Lavar', 'Forno', 'Cilindro', 'Aquecimento']
        }
      },
      series: [{
        name: 'series-1',
        data: [0, 0, 0, 0, 0, 0]
      }]
    }
  },
  methods: {
    
    showStart(){
      if(this.estado_equipamentos[this.selected].on){
        return 'Desligar'
      }
      return 'Ligar'
    },
    myStopFunction(){
      clearInterval(this.myTimer)
    },
    timer(){
      let sec = 0;
      let that = this;
      let selected = this.selected;
      this.myTimer= setInterval( function(){
        const max = 90;
        const min = 20;
        console.log(selected);
        that.series[0].data[0] = ++sec%60;
        console.log(that.series);
        // console.log(that.series[0].data[0]);
        const newData = that.series[0].data.map((current_elem, index) => {

          if(index==0){
            return ++sec%60
          }

          if(index==1){
            return ++sec%120
          }
          return current_elem
          // switch(index){
          //   case 0:
          //    current_elem = ++sec%60
          //     break;
          //
          //   case 1:
          //     if(current_elem == 0){
          //       return 1
          //     }
          //     else{
          //       return ++current_elem*1.15;
          //     }
          //     break;
          // }

          // console.log(index);
          // return Math.floor(Math.random() * (max - min + 1)) + min
        })
        that.series = [{
          data: newData
        }]
        // console.log(this.estado_equipamentos[this.selected]['timer'])
        // $("#seconds").html(pad(++sec%60));
        // $("#minutes").html(pad(parseInt(sec/60,10)));
      }, 2500);
    },
    toogle () {
      this.resposta = ''
      switch (this.selected) {
        case 'máquina de lavar':
          this.estado_equipamentos.maqLavar = true;
          console.log(this.estado_equipamentos.maqLavar)
          console.log("Escolheu a máquina de lavar!");

      }
      this.timer();
      // axios
      //   .get('http://192.168.10.2/control?cmd=event,switchsonoff1')
      //   .then(response => { this.resposta = response; this.light_on = true })
    },
    selected(){
      alert(this.selected());
    },
    computed:{
      selected(){
        return this.selected;
      },
      showTimer(){
        return this.myTimer;
      }
    }
  }
}
</script>
