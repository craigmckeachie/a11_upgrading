import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { WidgetComponent } from './widget/widget.component';
import { phoneServiceProvider } from './phones/shared/phone.service';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

declare var angular: any;

angular
  .module('phonecatApp')
  .directive('appWidget', downgradeComponent({ component: WidgetComponent }));

class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith('/widget') || url.toString() === '/';
  }
  extract(url) {
    return url;
  }
  merge(url, whole) {
    return url;
  }
}

@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(
      [
        {
          path: 'widget',
          component: WidgetComponent,
        },
      ],
      {
        useHash: true,
      }
    ),
  ],
  entryComponents: [WidgetComponent],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
