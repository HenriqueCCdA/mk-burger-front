<template>
  <div class="main-container">
    <h1>Gerenciar PedidosVue:</h1>
    <DashboardVue />
  </div>
</template>

<script>
import DashboardVue from '@/components/DashboardVue.vue'

export default {
  name: 'PedidosVue',
  components: {
    DashboardVue
  }
}
</script>
