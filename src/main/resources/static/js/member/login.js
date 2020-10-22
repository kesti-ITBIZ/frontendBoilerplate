$(() => {
    new Vue({
        el: "#login-app",
        data: {
            username: "",
            password: ""
        },
        methods: {
            onInputPassword: function (e) {
                if (/\s/.test(e.key)) e.preventDefault();
            },
            onEnter: async function (e) {
                if (e.keyCode === 13) await this.login();
            },
            login: async function () {
                let $this = this;

                let params = {
                    username: $this.username,
                    password: $this.password
                };

                if (ValidateUtils.validate(params.username, "아이디를 입력해주세요.") &&
                    ValidateUtils.validate(params.password, "패스워드를 입력해주세요.")) {
                    params.password = CryptoJS.SHA256(params.password).toString();
                    const response = JSON.parse(await AjaxUtils.post(   "/auth/login", params));

                    if (response.isSuccess) {
                        sessionStorage.setItem("username", params.username);
                        location.href = "/main/main";
                    } else $("#error-msg").text(response.errorMessage);
                }
            }
        }
    });
});