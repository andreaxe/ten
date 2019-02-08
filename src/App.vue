<template>
  <div id="app">
    <div class="uk-container" style="margin-top:10px;">
      <app-header></app-header>
      <div class="uk-grid my-grid">
        <div class="uk-width-1-4 my-nav">
          <app-sidenav></app-sidenav>
        </div>
        <div class="uk-width-3-4" style="border-left:1px solid #e5e5e5; padding-top: 20px;">
          <router-view></router-view>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Footer from './components/Footer'

export default {
  components: {
    'appHeader': Header,
    'appSidenav': Sidenav,
    'appHome': Home,
    'appFooter': Footer
  },
  name: 'App'
}
</script>

<style>
  @import './assets/css/uikit.css';
  @import './assets/css/my_style.css';
  .my-grid{
    border-top:1px solid #e5e5e5;
    margin-top: 10px !important;
  }
  .my-nav{
    padding: 20px 10px 20px 10px;
    /*padding-top: 50px;*/
    /*padding-bottom: 20px;*/
    border-bottom: 1px solid #e5e5e5;
    /*padding-left:10px;*/
    /*padding-right:10px;*/
    /*background-color: #F0F0F0;*/
  }
</style>
