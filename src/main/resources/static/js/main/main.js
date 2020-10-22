$(() => {
    new Vue({
        el: "#main-app",
        data: {

        },
        methods: {
            logout: async () => {
                if (LayerUtils.confirm("로그아웃 하시겠습니까?")) {
                    await AjaxUtils.post("/auth/logout");
                    LayerUtils.alert("로그아웃 되었습니다. 안녕히 가세요.");
                    sessionStorage.clear();
                    location.href = "/member/login";
                }
            }
        },
        created: function () {

        },
        mounted: function () {
            document.title = sessionStorage.getItem("username") + "님 환영합니다.";
        },
        updated: function () {

        },
        destroyed: function () {

        }
    });
});