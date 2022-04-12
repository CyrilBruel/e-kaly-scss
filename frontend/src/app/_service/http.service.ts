import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private router: Router) { }
  formOption (content_type = 'application/json', use_authorization = false) {
    const options = {
      headers: {
        'Content-Type' : content_type,
        'Authorization': ''
      }
    };

     if (use_authorization) {
      let token:any = localStorage.getItem("token");

      if(token == null)
        this.router.navigateByUrl("/connexion");
      else
        options.headers['Authorization'] = 'Bearer ' + token;
     }
    return options;
  }

  stringify(bodyObject: any){
    let ans = "";
    Object.keys(bodyObject).forEach((element:any)=>{
      ans+= element+"="+bodyObject[element]+"&";
    });
    return ans.substring(0, ans.length-1);
  }
}
