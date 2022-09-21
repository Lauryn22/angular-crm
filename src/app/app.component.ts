import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'crm';
  //public title: string | undefined;
  //public title!: string
  // ou :
  // constructor() {
  //   this.title = 'crm';
  // }
}
