// app.config.js
import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    name: process.env.APP_NAME || 'MyApp',
    slug: 'my-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['*/'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: process.env.IOS_BUNDLE_IDENTIFIER || 'com.example.myapp',
    },
    android: {
      package: process.env.ANDROID_PACKAGE || 'com.example.myapp',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    extra: {
        "eas": {
            "projectId": "736d46c1-984e-4261-8e1f-776ae1ad0d23"
          }
    },
  };
};