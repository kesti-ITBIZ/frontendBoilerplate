package kr.co.kesti.security;

import kr.co.kesti.utils.RestUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.Map;

@Slf4j
@Service("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
    @Value(("${api.url}"))
    private String apiUrl;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("username", username);

        Map<String, Object> response = (Map<String, Object>) RestUtils.post(apiUrl + "/api/member/findByUsername", params, Map.class).getBody();
        if (response == null || !response.containsKey("data")) throw new UsernameNotFoundException(username);

        Map<String, Object> responseData = (Map<String, Object>) response.get("data");
        return CustomUserDetails.builder()
                .username((String) responseData.get("username"))
                .password((String) responseData.get("password"))
                .authority((String) responseData.get("authority"))
                .accountExpired((boolean) responseData.get("accountExpired"))
                .accountLocked((boolean) responseData.get("accountLocked"))
                .credentialsExpired((boolean) responseData.get("credentialsExpired"))
                .enabled((boolean) responseData.get("enabled"))
                .build();
    }
}