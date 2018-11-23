import * as firebase from "firebase";
import { Response } from "@angular/http";

export class AuthService {
  token:string;
  constructor() { }
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
        firebase.auth().currentUser.getIdToken().then(
          (token:string)=>{
            this.token=token;
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
  getToken(){
     firebase.auth().currentUser.getIdToken().then(
      (token:string)=>{
        this.token=token;
      }
    )
    return this.token;
  }
}
