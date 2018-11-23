import * as firebase from "firebase";
import { Response } from "@angular/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) { }
  signupUser(email: string, password: string) {
    console.log("signup user");
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      (err) => {
        console.log(err);
      }
    )

  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then
      (
      (response) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {
            this.token = token;
          }
        )
        console.log("response-> ", response);
      }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }
  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    )
    return this.token;
  }
  isAuthanticated() {
    return this.token != null;
  }
}
