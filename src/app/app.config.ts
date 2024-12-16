import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restores scroll position after navigation
        anchorScrolling: 'enabled', // Enables scrolling to anchor tags
      })
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
  ],
};
