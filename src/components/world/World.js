import { mapState, mapActions } from "vuex";

export default {
    name: "World",
    computed: {
        ...mapState({
            world: state => state.world
        })
    },
    methods: {
        ...mapActions({
            setWorld: "SET_WORLD"
        })
    },
    mounted() {
        this.setWorld("World");
    }
}
