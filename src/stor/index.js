import Vuex from "vuex";
import Vue from "vue";
import shoppingBag from "./modules/shoppingbag";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        shoppingBag
    }
}) 