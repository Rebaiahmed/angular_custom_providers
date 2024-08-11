import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';
import { APP_CONFIG, AppConfig } from './app.config';

  // Define the configuration object that adheres to the AppConfig interface.
  // This object holds the actual configuration values that you want to inject into your components or services.
  const appConfig: AppConfig = {
    apiUrl: 'https://api.example.com',  // Base URL for API requests
    featureFlag: true                   // A feature toggle flag for enabling/disabling features
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LoggingService,
      useFactory: () => {
        const prefix = 'MyApp'; // You can set this based on environment or other conditions
        return new LoggingService(prefix);
      }
    },
    { provide: APP_CONFIG, useValue: appConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
