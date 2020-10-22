package kr.co.kesti.controller.error;

import kr.co.kesti.utils.MessageUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Slf4j
@Controller
public class CustomErrorController implements ErrorController {
    @GetMapping("/error")
    public ModelAndView error(HttpServletRequest request) {
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("error");

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());

            modelAndView.addObject("errorCode", statusCode);
            modelAndView.addObject("errorTitle", MessageUtils.getMessage("error_" + statusCode + ".errorTitle"));
            modelAndView.addObject("errorDesc", MessageUtils.getMessage("error_" + statusCode + ".errorDesc"));
        }

        return modelAndView;
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
