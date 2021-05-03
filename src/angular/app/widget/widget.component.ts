import { Component, Inject, OnInit } from '@angular/core';
import { PHONE_SERVICE } from '../phones/shared/phone.service';
@Component({
  selector: 'app-widget',
  template: `
    <h3>Angular Widget</h3>
    <p>{{ phones.length }} phones found.</p>
  `,
})
export class WidgetComponent implements OnInit {
  phones: any[] = [];

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) {}

  ngOnInit(): void {
    this.phones = this.phoneService.query();
  }
}
