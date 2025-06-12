package com.geo.spring.det.payload.response;

import com.geo.spring.det.models.Login;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	@Setter
    @Getter
    private Login userResponse;

	public JwtResponse(String accessToken, Login userResponse){//Long id, String username, String email, List<String> roles) {
		this.token = accessToken;
		this.userResponse = userResponse;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	@Getter
	@Setter
	@AllArgsConstructor
	@NoArgsConstructor
    static class UserResponse {
		@Setter
        private Long id;
		@Setter
        private String username;
		@Setter
        private String email;
		private List<String> roles;

	}
}
