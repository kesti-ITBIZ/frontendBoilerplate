$(() => {
    new Vue({
        el: "#find-username-app",
        data: {
            name: "",
            email: ""
        },
        methods: {
            onEnter: async function (e) {
                if (e.keyCode === 13) await this.findUsername();
            },
            findUsername: async function () {
                let params = {
                    name: this.name,
                    email: this.email
                };

                if (ValidateUtils.validate(params.name, "이름을 입력해주세요.") &&
                    ValidateUtils.validateEmail(params.email)) {
                    const response = await AjaxUtils.post(GblVars.apiUrl + "/api/member/findUsername", params);
                    // $("#find-username-app").css({ display: "none" });
                    this.display = "none";

                    let resultForm = $("#result");
                    resultForm.css({ display: "block" });
                    resultForm.html(`<div></div><div></div>`);

                    if (response.isExist) {
                        $("#result div:eq(0)").text(`회원님의 아이디는 ${response.username}입니다.`);
                        $("#result div:eq(1)").html(`
                            <input type="button" value="Find password" onclick="location.href = '/member/findPassword';" />
                            <input type="button" value="HOME" onclick="location.href = '/member/login';" />`);
                    } else {
                        $("#result div:eq(0)").text("입력하신 내용과 일치하는 정보가 없습니다.");
                        $("#result div:eq(1)").html(`<input type="button" value="HOME" onclick="location.href = '/member/login';" />`);
                    }
                }
            }
        }
    });
});