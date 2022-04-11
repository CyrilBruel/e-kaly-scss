import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_service';

@Component({
  selector: 'app-client-liste-plats',
  templateUrl: './client-liste-plats.component.html',
  styleUrls: ['./client-liste-plats.component.scss']
})
export class ClientListePlatsComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  message:any='';
  pageNumber:any=1;
  id_client:any;
  commandes:any=[];
  commandesCount:any=0;

  ngOnInit(): void {
    this.chargeRestaurant();
    this.loadPlatssEnCours();
  }

  chargeRestaurant(){
    this.id_client = localStorage.getItem('id_utilisateur');
  }

  loadPlatssEnCours(){
    const onSuccess = (resp:any)=>{
      console.log(resp);
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
    this.clientService.findCommandesClient(1, this.id_client).subscribe(onSuccess, onError);
  }
  generateTableData(data:any){
    this.commandes = data;
    for(var i=0; i<this.commandes.length; i++){
      if(this.commandes[i].etat == -1){
        this.commandes[i].status = "danger";
        this.commandes[i].avatar = "./assets/img/avatars/6.jpg";
        this.commandes[i].country = "Us";
        this.commandes[i].color = "danger";
        this.commandes[i].payment = "Mastercard";
        this.commandes[i].activity = "Yesterday";
        this.commandes[i].usage = 0;
      } else if(this.commandes[i].etat == 2){
        this.commandes[i].status = "warning";
        this.commandes[i].avatar = "./assets/img/avatars/6.jpg";
        this.commandes[i].country = "Fr";
        this.commandes[i].color = "warning";
        this.commandes[i].activity = "Yesterday";
        this.commandes[i].payment = "Paypal";
        this.commandes[i].usage = 25;
      } else if(this.commandes[i].etat == 3){
        this.commandes[i].status = "secondary";
        this.commandes[i].avatar = "./assets/img/avatars/6.jpg";
        this.commandes[i].country = "Pl";
        this.commandes[i].color = "secondary";
        this.commandes[i].activity = "Yesterday";
        this.commandes[i].payment = "Stripe";
        this.commandes[i].usage = 50;
      } else if(this.commandes[i].etat == 4){
        this.commandes[i].status = "primary";
        this.commandes[i].avatar = "./assets/img/avatars/6.jpg";
        this.commandes[i].country = "Es";
        this.commandes[i].color = "primary";
        this.commandes[i].payment = "Visa";
        this.commandes[i].activity = "Yesterday";
        this.commandes[i].usage = 75;
      } else if(this.commandes[i].etat == 5){
        this.commandes[i].status = "success";
        this.commandes[i].avatar = "./assets/img/avatars/6.jpg";
        this.commandes[i].country = "In";
        this.commandes[i].color = "success";
        this.commandes[i].payment = "ApplePay";
        this.commandes[i].activity = "Yesterday";
        this.commandes[i].usage = 100;
      }
    }
  }
}
