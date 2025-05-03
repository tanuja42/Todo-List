import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo1-list';
  constructor(){
    setTimeout(() =>{
      this.title = "Changed title";
    },2000);
  }
}
