<template>
  <div class="col-3">
    <h3>Categories</h3>

    <ul class="nav flex-column mt-3">
      <li class="nav-item">
        <router-link class="nav-link" to="/categories/all">All</router-link> 
      </li>
      <li class="nav-item" v-for="(c, i) in categories" :key="i">
        <router-link class="nav-link" :to="'/categories/' + c.slug">{{ c.name}}</router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["categories"]),
    pageContent() {
      const slug = this.$route.params.slug ? this.$route.params.slug : "home";
      const page = this.pages.find((page) => page.slug === slug);

      if (page) return page.content;

      return "";
    },
  },
};
</script>
