<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
import Header from './components/Header.vue';
export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(['setPagesAction'])
  },
  async created() {
    await this.setPagesAction();
  }
};
</script>