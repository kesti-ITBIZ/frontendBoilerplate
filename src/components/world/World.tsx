import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const World = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "SET_WORLD", payload: { world: "World" } });
    }, [dispatch]);
    const world = useSelector((state: any) => state.reducer.world);

    return (
        <div>{world}</div>
    );
};

export default World;
