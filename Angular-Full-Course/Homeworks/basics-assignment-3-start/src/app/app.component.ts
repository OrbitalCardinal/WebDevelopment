import { Component } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enable: boolean = false;
  clickLog: number[] = [];
  counter: number = 1;
  color: String = 'white';
  enableText() {
    this.enable = !this.enable;
    this.clickLog.push(this.counter);
    this.counter = this.counter + 1;


  }
}
