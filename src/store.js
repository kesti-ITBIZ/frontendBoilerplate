import { createStore } from "vuex";

export default createStore({
    state: {
        hello: "",
        world: ""
    },
    mutations: {
        SET_HELLO: (state, hello) => state.hello = hello,
        SET_WORLD: (state, world) => state.world = world
    },
    actions: {
        SET_HELLO: (context, hello) => context.commit("SET_HELLO", hello),
        SET_WORLD: (context, world) => context.commit("SET_WORLD", world)
    }
});
