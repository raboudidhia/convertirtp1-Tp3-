import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  favoriteMessage: string = '';
  currentComponent: string = 'cheesecakes';

  ngOnInit() {
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!!!!!";
    }
  }

 

  showComponent(component: string) {
    this.currentComponent = component;
  }
}
