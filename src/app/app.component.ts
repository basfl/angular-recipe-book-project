import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature="recipe";
  onNavigate(feature:string) {
    this.loadedFeature=feature;

  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCb5kzxxRyo1b91FOxG3LiVdOHhpyfDdws",
      authDomain: "ng-recipe-book-1ef56.firebaseapp.com",
    });

  }
}
