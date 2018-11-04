<template>
  <div id="app">
    <navbar v-bind:lightLogo="lightLogo"></navbar>
    <router-view/>
  </div>
</template>

<script>
  import navbar from './components/navbar'
  export default {
    name: 'App',
    components: {
      'navbar': navbar
    },
    metaInfo: {
      title: 'Food on the fly',
      titleTemplate: 'Drovee - %s'
    },

    data() {
      return {
        lightLogo: Boolean,
        lightLogos: [
          "webdesign"
        ]
      }
    },
    
	  methods: {
      changeLogoColor() {
        if(this.lightLogos.includes(this.$route.name)) {
          this.lightLogo = true;
        } else {
          this.lightLogo = false;
        }
      }
    },

    updated: function() {
      this.changeLogoColor();
    },

    mounted: function() {
      this.changeLogoColor();
    }
  }
</script>

<style lang="scss">
*{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
