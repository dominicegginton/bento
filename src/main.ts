import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@bento/app.module';
import { environment } from './environments/environment';

if (environment.environment === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch(console.error);
