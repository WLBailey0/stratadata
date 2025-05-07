package com.geo.spring.det.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Login {
    private long id;
    private String username;
    private String email;
    private List<String> roles;

}
