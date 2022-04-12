import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private httpUtil: HttpService) {
  }

  sInscrire(user:any){
    const options = this.httpUtil.formOption();
    // const body = this.httpUtil.stringify(user);
    const body = {utilisateur: user};
    return this.http.post("https://m1p9mean-960-heriniaina.herokuapp.com/auth/sign-up", body, options);
  }

  login(login: any) {
    const options = this.httpUtil.formOption();
    //const body = this.httpUtil.stringify(login);
    const body = login;
    return this.http.post("https://m1p9mean-960-heriniaina.herokuapp.com/auth/login", body, options);
  }

  logout() {
    const options = this.httpUtil.formOption('application/json', true);
    return this.http.get("https://m1p9mean-960-heriniaina.herokuapp.com/auth/logout", options);
  }

  removeToken(){
    localStorage.removeItem("token");
    localStorage.removeItem("id_profile");
    localStorage.removeItem("id_utilisateur");
  }

  saveToken (tokenUtilisateur:any){
    //const value = JSON.stringify(token);
    const token = tokenUtilisateur.token;
    const id_profile = tokenUtilisateur.id_profile;
    const id_utilisateur = tokenUtilisateur.id_utilisateur;
    localStorage.setItem("token", token);
    localStorage.setItem("id_profile", id_profile);
    localStorage.setItem("id_utilisateur", id_utilisateur);
  }
}
