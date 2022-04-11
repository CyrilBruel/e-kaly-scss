import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../_service/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string = "";
  loginForm={
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  login(){

    const onSuccess = (resp:any)=>{
      if(resp.status == "success"){

        this.authenticationService.saveToken(resp.data);

        window.dispatchEvent(new CustomEvent("user:login"));
        this.router.navigateByUrl('app/mon-compte');

      }
      if(resp.status == "error"){
        this.message = resp.message;
      }
    };
    const onError = (resp:any)=>{
      this.message = "Erreur interne";
    };

    this.authenticationService.login(this.loginForm).subscribe(onSuccess, onError);

  }

}
