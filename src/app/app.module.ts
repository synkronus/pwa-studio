import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { CoreAppModule } from './core/pages.module';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LocalStorageService } from './services/local-storage.service';
import { ErrorsHandler } from './services/http/error-handler.service';
import { EncodeHttpService } from './services/http/encode-Http.service';

import { HttpDropService } from './services/http/http-drop.service';
import { CommonAppModule } from './common/common.module';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { ErrorHandlerInterceptor } from './services/http/errorHandlerInterceptor.service';
import { AngularFireModule } from './angular-fire.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CustomAppModule } from './modules/custom-app.module';

export const protectedResourceMap: any =
  [
    [environment.base_url, environment.scopeUri]
  ];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    CoreAppModule,
    CommonAppModule,
    CustomAppModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    TranslateModule.forRoot({defaultLanguage: 'es-LA'}),
    AngularFireModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
  ],
  exports: [CommonAppModule],
  providers: [
    HttpDropService,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncodeHttpService,
      multi: true
    },
       {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ErrorHandler, useClass: ErrorsHandler },
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }