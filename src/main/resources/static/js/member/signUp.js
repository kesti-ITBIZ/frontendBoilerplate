$(() =>{
    new Vue({
        el: "#sign-up-app",
        data: {
            username: "",
            password: "",
            passwordConfirm: "",
            name: "",
            email: "",
            phoneNum1: "",
            phoneNum2: "",
            phoneNum3: ""
        },
        methods: {
            checkUsername: async function () {
                const username = this.username;

                if (ValidateUtils.validateUsername(username)) {
                    const response = (await AjaxUtils.post(GblVars.apiUrl + "/api/member/checkUsername", { username })).data;

                    if (response.valid)
                        LayerUtils.alert(`${username}는 사용 가능합니다.`);
                    else LayerUtils.alert("중복된 아이디가 존재합니다.");
                }
            },
            onInputPassword: function (e) {
                if (/\s/.test(e.key)) e.preventDefault();
            },
            onInputFirstPhoneNum: function () {
                if (this.phoneNum1.length === 3) $("#phone-num-2").focus();
            },
            onInputSecondPhoneNum: function () {
                if (this.phoneNum2.length === 4) $("#phone-num-3").focus();
            },
            onEnter: async function (e) {
                if (e.keyCode === 13) await this.signUp();
            },
            signUp: async function () {
                let params = {
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    email: this.email,
                    phoneNum: [this.phoneNum1, this.phoneNum2, this.phoneNum3].join("-")
                };

                if (ValidateUtils.validateUsername(params.username) &&
                    ValidateUtils.validatePassword(params.password, this.passwordConfirm) &&
                    ValidateUtils.validate(params.name, "이름을 입력해주세요.") &&
                    ValidateUtils.validateEmail(params.email) &&
                    ValidateUtils.validatePhoneNum(params.phoneNum)) {
                    params.password = CryptoJS.SHA256(params.password).toString();
                    await AjaxUtils.post(GblVars.apiUrl + "/api/member/signUp", params);
                    LayerUtils.alert("회원가입이 완료되었습니다.");
                    location.href = "/member/login";
                }
            }
        }
    });
});