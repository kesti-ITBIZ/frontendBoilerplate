package kr.co.kesti.config;

import kr.co.kesti.utils.SessionUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new HandlerInterceptorAdapter() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                if (!SessionUtils.isAuthenticated()) {
                    response.sendRedirect(request.getContextPath() + "/member/login");
                    return false;
                }
                return true;
            }
        }).addPathPatterns("/main/**");

        registry.addInterceptor(new HandlerInterceptorAdapter() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                if (SessionUtils.isAuthenticated()) {
                    response.sendRedirect(request.getContextPath() + "/main/main");
                    return false;
                }
                return true;
            }
        }).addPathPatterns("/member/**");
    }
}