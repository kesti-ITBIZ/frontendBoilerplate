$(() => {
    new Vue({
        el: "#find-password-app",
        data: {
            username: "",
            email: ""
        },
        methods: {
            onEnter: async function (e) {
                if (e.keyCode === 13) await this.findPassword();
            },
            findPassword: async function ()  {
                let params = {
                    username: this.username,
                    email: this.email
                };

                if (ValidateUtils.validateUsername(params.username) &&
                    ValidateUtils.validateEmail(params.email)) {
                    const response = await AjaxUtils.post(GblVars.apiUrl + "/api/member/findPassword", params);
                    // $("#find-password-app").css({ display: "none" });
                    this.display = "none";

                    let resultForm = $("#result");
                    resultForm.css({ display: "block" });
                    resultForm.html(`<div></div><div></div>`);

                    $("#result div:eq(0)").text(response.isExist ? `회원님의 임시 비밀번호를 ${params.email}로 보내드렸습니다.` : "입력하신 내용과 일치하는 정보가 없습니다.");
                    $("#result div:eq(1)").html(`<input type="button" value="HOME" onclick="location.href = '/member/login';" />`);
                }
            }
        }
    });
});