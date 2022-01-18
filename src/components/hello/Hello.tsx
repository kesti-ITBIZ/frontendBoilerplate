import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hello = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "SET_HELLO", payload: { hello: "Hello" } });
    }, [dispatch]);
    const hello = useSelector((state: any) => state.reducer.hello);

    return (
        <div>{hello}</div>
    );
};

export default Hello;
