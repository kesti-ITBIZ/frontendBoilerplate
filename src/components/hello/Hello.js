import { mapState, mapActions } from "vuex";

export default {
    name: "Hello",
    computed: {
        ...mapState({
            hello: state => state.hello
        })
    },
    methods: {
        ...mapActions({
            setHello: "SET_HELLO"
        })
    },
    mounted() {
        this.setHello("Hello");
    }
}
