import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_service';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = "sidebar";
  message: string = '';
  loading=false;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private authenticationUtil: AuthenticationService, private router: Router) {
    super();
  }

  seDeconnecter(){
    const onSuccess = (resp:any)=>{
      if(resp.meta.status == 'success'){
        this.authenticationUtil.removeToken();
        this.router.navigateByUrl('');
      }else{
        this.message = resp.meta.message;
      }
    }

    const onError =()=>{
      this.message = "Erreur interne";
    }
    this.loading = true;
  this.authenticationUtil.logout().subscribe(onSuccess, onError);

  }
}
