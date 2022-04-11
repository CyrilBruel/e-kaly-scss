import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../_service/index';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  message:string = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }

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
