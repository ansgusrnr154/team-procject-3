// src/main/java/com/example/backend/security/CognitoJwtUtil.java
package com.example.backend.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.cognitoidentityprovider.CognitoIdentityProviderClient;
import software.amazon.awssdk.services.cognitoidentityprovider.model.GetUserRequest;
import software.amazon.awssdk.services.cognitoidentityprovider.model.GetUserResponse;

@Component
public class CognitoJwtUtil {

    private final CognitoIdentityProviderClient cognitoClient;

    @Value("${aws.cognito.user-pool-id}")
    private String userPoolId;

    public CognitoJwtUtil() {
        this.cognitoClient = CognitoIdentityProviderClient.builder()
                .region(Region.US_WEST_2)
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build();
    }

    public String validateTokenAndGetUsername(String jwtToken) {
        GetUserRequest getUserRequest = GetUserRequest.builder()
                .accessToken(jwtToken)
                .build();
        GetUserResponse getUserResponse = cognitoClient.getUser(getUserRequest);
        return getUserResponse.username();
    }
}
