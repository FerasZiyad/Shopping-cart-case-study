import axios from 'axios';

const state = {
    books: [],
}

const getters = {
    allBooks: (state) => state.books,
}

const actions = {
    async fetchBooks({ commit }) {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await axios.get(
            proxyurl + "https://firebasestorage.googleapis.com/v0/b/efectura-a06ee.appspot.com/o/products.json?alt=media"
        );
        commit('setBooks', response.data);
    }
}

const mutations = {
    setBooks: (state, books) => (state.books = books)
}

export default {
    state,
    getters,
    actions,
    mutations
}