import { createStore } from "redux";

export default createStore((state, action) => {
    switch (action.type) {
    case "SET_HELLO":
        return {
            ...state,
            hello: action.hello
        };
    case "SET_WORLD":
        return {
            ...state,
            world: action.world
        };
    default:
        return {
            hello: "",
            world: ""
        };
    }
});
