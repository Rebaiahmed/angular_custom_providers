import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_custom_providers';

  constructor(@Inject(APP_CONFIG) public config: AppConfig,private logger: LoggingService) {}


  ngOnInit() {
    this.logger.log('Hello from AppComponent!');
  }
}
