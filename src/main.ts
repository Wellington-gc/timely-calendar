import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*eslint-env node*/
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
