import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from 'src/app/_service';
@Component({
  selector: 'app-restaurant-plats',
  templateUrl: './restaurant-plats.component.html',
  styleUrls: ['./restaurant-plats.component.scss']
})
export class RestaurantPlatsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  message:any='';
  pageNumber:any=1;
  restaurant:any=[];
  id_restaurant:any;
  plats:any=[];
  platsCount:any=0;

  ngOnInit(): void {
    this.chargeRestaurant();
    this.loadPlatssEnCours();
  }

  chargeRestaurant(){
    this.id_restaurant = localStorage.getItem('id_utilisateur');
  }

  loadPlatssEnCours(){
    const onSuccess = (resp:any)=>{
      if(resp['meta']['status'] == 'success'){
        this.generateTableData(resp['data']);
      }
      if(resp.meta.status == 'error'){
        this.message = resp.message;
        console.log(resp);
      }
    };
    const onError = (resp:any)=>{
      this.message = 'Erreur interne';
      console.log(resp);
    }
    this.restaurantService.findPlats(1, this.id_restaurant).subscribe(onSuccess, onError);
  }
  generateTableData(data:any){
    this.plats = data.produits;
    this.platsCount = data.produitsCount;

    for(let i=0; i<this.plats.length; i++){
      if(this.plats[i].etat == 1){
        this.plats[i].status = "success";
      } else if(this.plats[i].etat == -1){
        this.plats[i].status = "danger";
      }
    }
  }
}
