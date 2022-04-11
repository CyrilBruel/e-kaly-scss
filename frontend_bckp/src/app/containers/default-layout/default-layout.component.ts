import { Component, OnInit } from '@angular/core';

import { PROFILE_EKALY, PROFILE_LIVREUR, PROFILE_RESTAURANT, PROFILE_CLIENT } from 'src/environments/environment';

import { navItems, navItemsClient, navItemsRestaurant, navItemsLivreur, navItemsEkaly } from './_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  public navItems = navItems;
  public navItemsClient = navItemsClient;
  public navItemsRestaurant = navItemsRestaurant;
  public navItemsLivreur = navItemsLivreur;
  public navItemsEkaly = navItemsEkaly;
  public navItemsGlobal : any;

  userProfile:string='';

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {
  }
  ngOnInit(): void {
    this.initMenu();
  }
  initMenu(){

    const token= localStorage.getItem("token");
    const id_utilisateur= localStorage.getItem("id_utilisateur");
    var id_profile= localStorage.getItem("id_profile");
    if(PROFILE_EKALY===id_profile){
      this.navItemsGlobal = this.navItemsEkaly;
    } else if(PROFILE_LIVREUR===id_profile){
      this.navItemsGlobal = this.navItemsLivreur;
    } else if(PROFILE_RESTAURANT===id_profile){
      this.navItemsGlobal = this.navItemsRestaurant;
    } else if(PROFILE_CLIENT===id_profile){
      this.navItemsGlobal = this.navItemsClient;
    } else {
      this.navItemsGlobal = this.navItems
    }
  }
}
