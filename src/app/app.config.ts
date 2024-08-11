// Define an interface for the application configuration.

import { InjectionToken } from "@angular/core";

// This helps ensure that the configuration object adheres to a specific structure.
export interface AppConfig {
    apiUrl: string;
    featureFlag: boolean;
  }
  
  // Create an InjectionToken for the AppConfig.
  // InjectionToken is a way to create unique tokens that can be used to inject values or objects.
  // The 'app.config' string is used to identify this particular token in the DI system.
  export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
  
  // Define the configuration object that adheres to the AppConfig interface.
  // This object holds the actual configuration values that you want to inject into your components or services.
  const appConfig: AppConfig = {
    apiUrl: 'https://api.example.com',  // Base URL for API requests
    featureFlag: true                   // A feature toggle flag for enabling/disabling features
  };