import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-qav8hzrbnrrcopb6.us.auth0.com',
        clientId: '5CJWRSG7a4IV6tP3xAG3UIYVuLPWznah',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
    ),
  ]
};
