class ValidateUtils {
    static validateUsername(username) {
        if (username === "") {
            LayerUtils.alert("아이디를 입력해주세요.");
            return false;
        } else if (username.length < 3) {
            LayerUtils.alert("아이디는 3자 이상 입력해주세요.");
            return false;
        } else return true;
    }

    static validatePassword(password, passwordConfirm) {
        if (password === "") {
            LayerUtils.alert("패스워드를 입력해주세요.");
            return false;
        } else if (passwordConfirm === "") {
            LayerUtils.alert("패스워드 확인을 입력해주세요.");
            return false;
        } else if (password !== passwordConfirm) {
            LayerUtils.alert("패스워드와 패스워드 확인이 일치하지 않습니다. 다시 확인해주세요.");
            return false;
        } else if (!(password.length >= 8 &&
            /[a-zA-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[`~!@#$%^&*|()\-_=+\[\]{},.<>\\'";:\/?]/.test(password))) {
            LayerUtils.alert("패스워드는 8자 이상 영문자 + 숫자 + 특수문자 조합으로 입력해주세요.");
            return false;
        } else return true;
    }

    static validateEmail(email) {
        if (email === "") {
            LayerUtils.alert("이메일을 입력해주세요.");
            return false;
        } else if (!/^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(email)) {
            LayerUtils.alert("유효하지 않은 이메일 형식입니다. 다시 확인해주세요.");
            return false;
        } else return true;
    }

    static validatePhoneNum(phoneNum) {
        if (phoneNum.replace(/[\-]/gi, "") === "") {
            LayerUtils.alert("전화번호를 입력해주세요.");
            return false;
        } else if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(phoneNum)) {
            LayerUtils.alert("유효하지 않은 전화번호 형식입니다. 다시 확인해주세요.");
            return false;
        } else return true;
    }

    static validate(content, textWhenEmpty, constraints = null) {
        if (content === "") {
            LayerUtils.alert(textWhenEmpty);
            return false;
        }
        if (constraints != null)
            for (let i = 0; i < constraints.length; ++i)
                if (constraints[i].constraintFunc(content)) {
                    LayerUtils.alert(constraints[i].text);
                    return false;
                }
        return true;
    }
}