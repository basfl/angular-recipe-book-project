import * as firebase from "firebase";

export class AuthService {

  constructor() { }
  signupUser(email: string, password: string) {
    console.log("signup user");
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      (err) =>{
         console.log(err);
        }
    )

  }
}
