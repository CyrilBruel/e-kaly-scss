import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private httpUtil: HttpService) { }

  findCommmandesEnCours(pageNumber:any, id_restaurant:any){
    const options = this.httpUtil.formOption("application/json", true);
    const path = 'https://m1p9mean-960-heriniaina.herokuapp.com/commandes/'+pageNumber+'/6/'+id_restaurant;
    return this.http.get(path, options);
  }

  findPlats(pageNumber:any, id_restaurant: any){
    const options = this.httpUtil.formOption("application/json", true);
    const path = 'https://m1p9mean-960-heriniaina.herokuapp.com/restaurants/plats/'+pageNumber+'/6/'+id_restaurant;
    return this.http.get(path, options);
  }
}
