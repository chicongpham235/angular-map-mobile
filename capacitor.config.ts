import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hospitalmap.angular',
  appName: 'map-mobile-app',
  webDir: 'dist/map-mobile-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
