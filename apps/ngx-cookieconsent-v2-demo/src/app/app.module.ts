
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent-v2';

import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { HomeModule } from './home/home.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule.withServerTransition({ appId: 'ngx-cookieconsent-v2-demo-id' }),
      TransferHttpCacheModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        NgcCookieConsentModule.forRoot(cookieConfig),
        MarkdownModule.forRoot(
          {
            markedOptions: {
              provide: MarkedOptions,
              useValue: {
                gfm: true,
                breaks: false,
                pedantic: false,
                smartLists: true,
                smartypants: false,
              },
            },
            sanitize: SecurityContext.NONE
          }
        ),
        AppRoutingModule,
        AppSharedModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
