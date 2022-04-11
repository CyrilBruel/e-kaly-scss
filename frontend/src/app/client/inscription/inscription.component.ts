import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  message: string='';
  loading = false;

  id_profile="62516f2053388b7f31ab4aef";

  constructor(private authenticationUtil: AuthenticationService, private router: Router, private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    this.user = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nomUtilisateur: ['', Validators.required],
      mdp: ['', Validators.required],
      repeatPass: ['', Validators.required]
    });
  }

  get f() { return this.user.controls; }

  get userJson(){
    var value= {
      nom: this.user.value.nom,
      prenom: this.user.value.prenom,
      nomUtilisateur: this.user.value.nomUtilisateur,
      mdp: this.user.value.mdp
    };
    return value;
  }

  sInscrire(){
    this.message = "";
    const onError = (resp:any)=>{
      this.message = "Erreur interne";
      console.log(resp);
    };
    const onSuccess = (resp:any)=>{
      if(resp.meta.status == 'success'){
          this.authenticationUtil.saveToken(resp.data);

          //window.dispatchEvent(new CustomEvent('user:login'));
          this.router.navigateByUrl('home/client/acceuil');
      }
      if(resp.meta.status == 'error'){
        this.message = resp.message;
        console.log(resp);
      }
    };

    if(this.f['mdp'].value != this.f['repeatPass'].value){
      this.message = "Les mots de passe saisis ne sont pas les memes";
      this.loading = true;
    }
    else{
      this.loading = true;
      const user = this.userJson;
      this.authenticationUtil.sInscrire(user).subscribe(onSuccess, onError);
    }
  }
}
