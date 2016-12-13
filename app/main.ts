import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// this code tells us which module is the overarching module to be run first.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);