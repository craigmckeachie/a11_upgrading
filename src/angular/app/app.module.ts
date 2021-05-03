import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UpgradeModule],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
}
