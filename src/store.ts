import { combineReducers, createStore } from "redux";

const reducer = (state: any, action: any) => {
    switch (action.type) {
    case "SET_HELLO":
        return {
            ...state,
            hello: action.payload.hello
        };
    case "SET_WORLD":
        return {
            ...state,
            world: action.payload.world
        };
    default:
        return {
            hello: "",
            world: ""
        };
    }
};

export default createStore(combineReducers({ reducer }));
