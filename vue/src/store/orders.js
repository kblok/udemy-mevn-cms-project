import Axios from "axios";
const ordersUrl = `http://localhost:3000/pages`;

export default {
    namespaced: true,

    state: {
        orders: []
    },
    mutations: {

    },
    actions: {
        async storeOrderAction(context, order) {
            return (await Axios.post(ordersUrl, order)).data.id;
        },
    }
}