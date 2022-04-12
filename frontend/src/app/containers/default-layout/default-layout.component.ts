import { Component, OnInit } from '@angular/core';

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

  PROFILE_EKALY= "62516f4b53388b7f31ab4af2";
  PROFILE_LIVREUR="62516f3c53388b7f31ab4af1"
  PROFILE_RESTAURANT="62516f3253388b7f31ab4af0"
  PROFILE_CLIENT="62516f2053388b7f31ab4aef"

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
    if(this.PROFILE_EKALY===id_profile){
      this.navItemsGlobal = this.navItemsEkaly;
    } else if(this.PROFILE_LIVREUR===id_profile){
      this.navItemsGlobal = this.navItemsLivreur;
    } else if(this.PROFILE_RESTAURANT===id_profile){
      this.navItemsGlobal = this.navItemsRestaurant;
    } else if(this.PROFILE_CLIENT===id_profile){
      this.navItemsGlobal = this.navItemsClient;
    } else {
      this.navItemsGlobal = this.navItems
    }
  }
}
