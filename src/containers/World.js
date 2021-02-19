import { connect } from "react-redux";

import World from "../components/world/World";

export default connect(
    state => ({
        world: state.world
    }),
    dispatch => ({
        onSetWorld: world => dispatch({ type: "SET_WORLD", world })
    })
)(World);
