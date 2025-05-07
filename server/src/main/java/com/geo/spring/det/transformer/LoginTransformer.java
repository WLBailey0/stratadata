package com.geo.spring.det.transformer;

import com.geo.spring.det.models.Login;
import com.geo.spring.det.security.services.UserDetailsImpl;

import java.util.List;

public class LoginTransformer {
    public static Login transform(UserDetailsImpl userDetails, List<String> roles) {
        return Login.builder()
                .email(userDetails.getEmail())
                .username(userDetails.getUsername())
                .id(userDetails.getId())
                .roles(roles)
                .build();
    }
}
