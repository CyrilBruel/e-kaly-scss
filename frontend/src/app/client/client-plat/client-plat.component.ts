import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ClientService } from 'src/app/_service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-plat',
  templateUrl: './client-plat.component.html',
  styleUrls: ['./client-plat.component.scss']
})
export class ClientPlatComponent implements OnInit {
  lnk= ["https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg"];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inprogress = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  produits:any=[];
  produitsCount:any;
  pageNumber = 1;
  message: string= '';

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];
  platForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.platForm = this.formBuilder.group({
      quantite: [null, Validators.required]
    });
    this.loadPlatsClient();
    this.getUser();
  }

  id_utilisateur :any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  loadPlatsClient(){
    const onSuccess=(resp:any)=>{
      this.message = "BYE";
      if(resp.meta.status == 'success'){
        this.message = "HELLOOOOO";
        this.generateProduits(resp.data);
        // this.produits = resp.data.protuits;
        // this.produitsCount = resp.data.produitsCount;
      } else if(resp.meta.status == 'error'){
        this.message = resp.meta.message;
      }
    };

    const onError=(resp:any)=>{
      this.message = 'Internal Server Error';
      console.log(resp);
    };
    this.message = "BOUBOU";
    this.clientService.findPlatsClient(1).subscribe(onSuccess, onError);
  }

  generateProduits(data:any){
    this.produits = data.produits;
    this.produitsCount = data.produitsCount;
  }

  getUser(){
    this.id_utilisateur = localStorage.getItem('id_utilisateur');
  }

  // ajoutPanier(id:any, _id:any){
  //   var containputiner = document.querySelector("#panier_"+this.commande[i]._id);
  //     if(parseInt(containputiner['value'])<=0){
  //       this.userService.openMessage(true,"Entrer une quantite valide");
  //       return;
  //     }
  //     const id = { product:this.commande[i]._id,quantite:containputiner['value'] };
  //     reste.push(id);
  // }

  incrementPanier(){

  }

  acheterPlat(i:any){
    var qte = this.platForm.value.quantite;
    var data = {
      id_client : this.id_utilisateur,
      etat : -1,
      detailsCommande : [
        {
          produit : this.produits[i],
          quantite : qte
        }
      ]
    }
    const onSuccess=(resp:any)=>{
      if(resp.meta.status == "success"){
        console.log("SUCESSSSS")
        //window.dispatchEvent(new CustomEvent("user:login"));
        this.router.navigateByUrl('home/client/listecommandes');

      }
      if(resp.meta.status == "error"){
        this.message = resp.meta.message;
      }
    };

    const onError=(resp:any)=>{
      this.message = 'Internal Server Error';
      console.log(resp);
    };
    this.clientService.commander(data).subscribe(onSuccess, onError);
  }
}
