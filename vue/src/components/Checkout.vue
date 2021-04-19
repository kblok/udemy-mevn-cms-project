<template>
  <div class="row mt-3">
    <div class="col-12">
      <div class="from-group m-2">
        <label for="">Name</label>
        <input type="text" class="form-control" v-model="order.name" />
      </div>
      <div class="from-group m-2">
        <label for="">Email</label>
        <input type="text" class="form-control" v-model="order.email" />
      </div>
      <div class="from-group m-2">
        <label for="">Address</label>
        <input type="text" class="form-control" v-model="order.address" />
      </div>
    </div>
    <div class="col-12 text-center">
      <router-link class="btn btn-secondary m-1" to="/cart">Back</router-link>
      <button class="btn btn-primary m-1">Place Order</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      order: {
        name: "John",
        email: "john@gmail.com",
        address: "John Street",
      },
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    ...mapGetters({
      total: "cart/totalPrice",
    }),
  },
  methods: {
    stateOrder: 'order/storeOrderAction',
    cleartCartData: 'cart/clearCartData'
  },
};
</script>
