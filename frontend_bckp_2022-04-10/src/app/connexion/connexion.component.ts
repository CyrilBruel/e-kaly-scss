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
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
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

  get loginJson(){
    var value= {
      nomUtilisateur: this.loginForm.value.username,
      mdp: this.loginForm.value.password
    };
    return value;
  }

  login(){

    const onSuccess = (resp:any)=>{
      if(resp.meta.status == "success"){
        this.authenticationService.saveToken(resp.data);

        //window.dispatchEvent(new CustomEvent("user:login"));
        this.router.navigateByUrl('home/client/acceuil');

      }
      if(resp.meta.status == "error"){
        this.message = resp.meta.message;
      }
    };
    const onError = (resp:any)=>{
      this.message = "Erreur interne";
    };
    this.loading = true;
    const login = this.loginJson;
    this.authenticationService.login(login).subscribe(onSuccess, onError);

  }

}
