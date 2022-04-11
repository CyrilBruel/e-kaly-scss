import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestaurantService } from 'src/app/_service';

interface ICommande {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-restaurant-commandes',
  templateUrl: './restaurant-commandes.component.html',
  styleUrls: ['./restaurant-commandes.component.scss']
})
export class RestaurantCommandesComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) {
    this.chargeRestaurant();
    this.loadCommandesEnCours();
  }
    message:any='';
    pageNumber=1;
    restaurant:any=[];
    id_restaurant:any;
  // public commandes: ICommande[] = [
  //   {
  //     name: 'Yiorgos Avraamu',
  //     state: 'New',
  //     registered: 'Jan 1, 2021',
  //     country: 'Us',
  //     usage: 50,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'Mastercard',
  //     activity: '10 sec ago',
  //     avatar: './assets/img/avatars/1.jpg',
  //     status: 'success',
  //     color: 'success'
  //   },
  //   {
  //     name: 'Avram Tarasios',
  //     state: 'Recurring ',
  //     registered: 'Jan 1, 2021',
  //     country: 'Br',
  //     usage: 10,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'Visa',
  //     activity: '5 minutes ago',
  //     avatar: './assets/img/avatars/2.jpg',
  //     status: 'danger',
  //     color: 'info'
  //   },
  //   {
  //     name: 'Quintin Ed',
  //     state: 'New',
  //     registered: 'Jan 1, 2021',
  //     country: 'In',
  //     usage: 74,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'Stripe',
  //     activity: '1 hour ago',
  //     avatar: './assets/img/avatars/3.jpg',
  //     status: 'warning',
  //     color: 'warning'
  //   },
  //   {
  //     name: 'Enéas Kwadwo',
  //     state: 'Sleep',
  //     registered: 'Jan 1, 2021',
  //     country: 'Fr',
  //     usage: 98,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'Paypal',
  //     activity: 'Last month',
  //     avatar: './assets/img/avatars/4.jpg',
  //     status: 'secondary',
  //     color: 'danger'
  //   },
  //   {
  //     name: 'Agapetus Tadeáš',
  //     state: 'New',
  //     registered: 'Jan 1, 2021',
  //     country: 'Es',
  //     usage: 22,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'ApplePay',
  //     activity: 'Last week',
  //     avatar: './assets/img/avatars/5.jpg',
  //     status: 'success',
  //     color: 'primary'
  //   },
  //   {
  //     name: 'Friderik Dávid',
  //     state: 'New',
  //     registered: 'Jan 1, 2021',
  //     country: 'Pl',
  //     usage: 43,
  //     period: 'Jun 11, 2021 - Jul 10, 2021',
  //     payment: 'Amex',
  //     activity: 'Yesterday',
  //     avatar: './assets/img/avatars/6.jpg',
  //     status: 'info',
  //     color: 'dark'
  //   }
  // ];

  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });

  commandes:any=[];


  ngOnInit(): void {

  }

  chargeRestaurant(){
    this.id_restaurant = localStorage.getItem('id_utilisateur');
  }

  loadCommandesEnCours(){
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
    this.restaurantService.findCommmandesEnCours(this.pageNumber, this.id_restaurant).subscribe(onSuccess, onError);
  }

  generateTableData(data:any){
    this.commandes = data;
    console.log(this.commandes.length)

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
