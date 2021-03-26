<template>
  <div class="row">
    <div class="col-3">
      Categories
    </div>
    <div class="col-9">
      {{ pageContent}}
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["pages"]),
    pageContent() {
      const slug = this.$route.params.slug ? this.$route.params.slug : 'home';
      const page = this.pages.find(page => page.slug === slug);

      if(page)
        return page.content;
      
      return '';
    }
  },
};
</script>
