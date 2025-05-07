package com.geo.spring.det.payload.response;

import com.geo.spring.det.models.Login;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
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
	public Login getUserResponse(){
		return userResponse;
	}
	public void setUserResponse(Login userResponse){
		this.userResponse = userResponse;
	}

	static class UserResponse {
		private Long id;
		private String username;
		private String email;
		private List<String> roles;

		UserResponse(Long id, String username, String email, List<String> roles){
			this.id = id;
			this.username = username;
			this.email = email;
			this.roles = roles;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public List<String> getRoles() {
			return roles;
		}
	}
}
