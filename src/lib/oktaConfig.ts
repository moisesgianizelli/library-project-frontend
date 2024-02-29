export const oktaConfig = {
  clientId: '0oafg4iqepPaU77vu5d7',
  issuer: 'https://dev-78109326.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
}