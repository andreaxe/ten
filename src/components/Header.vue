<template>
  <div class="uk-grid">
    <div class="uk-width-1-4" style="padding-left: 0px;">
      <h3 style="color: #f0506e; padding-left: 20px;">HappyLife</h3>
    </div>
    <div class="uk-width-3-4" style="text-align:right; padding-top: 20px;">
      <router-link to="/">
        <a href="" uk-icon="icon: home; ratio: 1.3" style="padding-right: 5px;"></a>
      </router-link>
      <router-link to="/">
        <a uk-icon="icon: cog; ratio: 1.3" style="padding-right: 5px;"></a>
      </router-link>
      <router-link to="" @click.native="logout()">
        <a uk-icon="icon: sign-out; ratio: 1.3" style="padding-right: 5px;"></a>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
}
</script>
