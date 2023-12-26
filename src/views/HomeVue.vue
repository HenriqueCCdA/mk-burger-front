<template>
  <BannerVue />
  <div class="main-container">
    <h1>Monte seu burger</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BannerVue from '@/components/BannerVue.vue'
import BurgerForm from '@/components/BurgerForm.vue'

export default {
  name: 'HomeVue',
  components: {
    BannerVue,
    BurgerForm
  }
}
</script>
