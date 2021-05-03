import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { WidgetComponent } from './widget/widget.component';

declare var angular: any;

angular
  .module('phonecatApp')
  .directive('appWidget', downgradeComponent({ component: WidgetComponent }));

@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [BrowserModule, UpgradeModule],
  entryComponents: [WidgetComponent],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
}
