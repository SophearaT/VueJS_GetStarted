<template>
  <HyperHeader v-if="$route.name != 'NotFound'"/>
  <RouterView/>
  <HyperFooter v-if="$route.name != 'NotFound'"/>
</template>
<script>

import HyperHeader from './components/HyperHeader.vue';
import HyperFooter from './components/HyperFooter.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
  }
}
</script>