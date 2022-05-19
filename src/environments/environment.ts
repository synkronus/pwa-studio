export const environment = {
  production: false,
  version: "{{ENV_VERSION}}",
  base_url: "https://localhost:5002/api/v1",
  base_url_mt_v1: "http://localhost:5001/api/v1",
  url_files: 'http://localhost:7001',
  scopeUri: ['api://ec2e03c1-f831-44d6-a9db-74b5452a22e0/RITScopeApp'],
  tenantId: '15e9c9d3-b605-41e3-a9c1-c40bc7633dbc',
  uiClienId: 'f78bbc04-99d8-4f54-bb5f-9910492560a6',
  redirectUrl: 'http://localhost:4200',
  consentScopes: ["user.read","openid","profile"],
  timeCheck: 30000,
  versionCheck: true,
  defaultLanguage: 'es-LA',
  supportedLanguages: ['es-LA', 'en-US'],
  supabaseUrl: 'https://kqbqrmectfkzkrnihuyo.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYnFybWVjdGZremtybmlodXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1NDQwMjYsImV4cCI6MTk2ODEyMDAyNn0.HCqF8jwmb9crX-ljU7y-zPW16QJ1CYrvogalHAWMjTo',
  firebase: {
    apiKey: "AIzaSyD-dXagoiXG6LsqS6yn75zaBDX5lifZv30",
    authDomain: "supabaseauthfcm.firebaseapp.com",
    projectId: "supabaseauthfcm",
    storageBucket: "supabaseauthfcm.appspot.com",
    messagingSenderId: "610748673645",
    appId: "1:610748673645:web:35eab0e85d2d7c52745964",
    measurementId: "G-LZYXRYCGGR"
  },
  vapidKey: 'BP252XVm-7RmjMml7ayNFCQRwMhuTQc1aohkVkH2CK-r4990TJE4UwnVIBAMKBkAHZOd-8QNPG9rV5jM4iLQO3Y',
};

