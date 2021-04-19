import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import CartModule from './cart';
import OrdersModule from './orders';

Vue.use(Vuex);

const baseUrl = 'http://localhost:3000';
const pagesUrl = `${baseUrl}/pages`;
const categoriesUrl = `${baseUrl}/categories`;
const productsUrl = `${baseUrl}/products`;
const productImagesUrl = `${baseUrl}/media/products/`;

export default new Vuex.Store({
    strict: true,
    modules: {
        cart: CartModule,
        orders: OrdersModule,
    },
    state: {
        pages: [],
        categories: [],
        products: [],
        productImages: productImagesUrl,
        currentPage: 1,
        pageCount: 0,
        pageSize: 4,
        currentCategory: 'all',
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setProducts(state, products) {
            state.products = products;
        },
        setPageCount(state, count) {
            state.pageCount = Math.ceil(Number(count) / state.pageSize);
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
        }
    },
    actions: {
        async setPagesAction(context) {
            context.commit('setPages', (await Axios.get(pagesUrl)).data);
        },
        async setCategoriesAction(context) {
            context.commit('setCategories', (await Axios.get(categoriesUrl)).data);
        },
        async setProductsByCategoryAction(context, category) {
            let url;
            let productCountUrl;

            if(category != 'all') {
                url =`${productsUrl}/${category}`;
                productCountUrl =`${productsUrl}/count/${category}`;
            } else {
                url = productsUrl;
                productCountUrl =`${productsUrl}/count/all`;
            }

            const productCount = (await Axios.get(productCountUrl)).data;

            context.commit('setPageCount', productCount);
            context.commit('setProducts', (await Axios.get(url)).data);
        },
        async setProductsByCategoryPaginationAction(context, page) {
            let url;
            if((context.state.currentCategory) != 'all') {
                url =`${productsUrl}/${context.state.currentCategory}?p=${page}`;
            } else {
                url = `${productsUrl}?p=${page}`;
            }

            context.commit('setProducts', (await Axios.get(url)).data);
        }
    }
});