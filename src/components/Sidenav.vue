<template>
  <section id="sidenav">
    <router-link to="/" tag="button" class="uk-button uk-button-default uk-button-large uk-width-1-1
     uk-margin-small-bottom" active-class="uk-button-primary" exact> Switch
    </router-link>

    <router-link to="/pin" tag="button" class="uk-button uk-button-default uk-button-large uk-width-1-1
    uk-margin-small-bottom" active-class="uk-button-primary"> Ligação com PIN
    </router-link>

    <router-link to="/cron" tag="button" class="uk-button uk-button-default uk-button-large uk-width-1-1
    uk-margin-small-bottom" active-class="uk-button-primary"> Ligação cronometrada
    </router-link>
  </section>
</template>
