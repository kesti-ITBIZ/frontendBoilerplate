import { connect } from "react-redux";

import Hello from "../components/hello/Hello";

export default connect(
    state => ({
        hello: state.hello
    }),
    dispatch => ({
        onSetHello: hello => dispatch({ type: "SET_HELLO", hello })
    })
)(Hello);
