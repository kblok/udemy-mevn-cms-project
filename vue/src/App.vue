<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(["setPagesAction", "setCategoriesAction"]),
    ...mapActions({ initializeCart: "cart/initializeCart" }),
  },
  async created() {
    await this.setPagesAction();
    await this.setCategoriesAction();
    this.initializeCart(this.$store);
  },
};
</script>