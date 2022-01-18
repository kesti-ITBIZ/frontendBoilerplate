import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";
import { Provider } from "react-redux";
import store from "../../store";
import userEvent from "@testing-library/user-event/dist";

test("World", () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    userEvent.click(getByText("world"));
    expect(getByText("World")).toBeInTheDocument();
});
