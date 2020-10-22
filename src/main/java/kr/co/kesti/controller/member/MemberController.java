package kr.co.kesti.controller.member;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/member")
public class MemberController {
    @GetMapping("/login")
    public String login() {
        return "member/login";
    }

    @GetMapping("/signUp")
    public String signUp() {
        return "member/signUp";
    }

    @GetMapping("/findUsername")
    public String findUsername() {
        return "member/findUsername";
    }

    @GetMapping("/findPassword")
    public String findPassword() {
        return "member/findPassword";
    }
}