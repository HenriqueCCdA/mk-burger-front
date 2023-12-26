<template>
  <NavbarVue :logo="logo_src" :alt="app_name" />
  <router-view />
  <FooterVue />
</template>

<script>
import NavbarVue from '@/components/NavbarVue.vue'
import FooterVue from '@/components/FooterVue.vue'
export default {
  components: {
    NavbarVue,
    FooterVue
  },
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: 'Make Yuor Burger'
    }
  }
}
</script>

<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
