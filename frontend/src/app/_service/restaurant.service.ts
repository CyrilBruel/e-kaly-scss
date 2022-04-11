import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { base_url, account } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private httpUtil: HttpService) { }

  findCommmandesEnCours(pageNumber:any, id_restaurant:any){
    const options = this.httpUtil.formOption("application/json", true);
    const path = base_url+'commandes/'+pageNumber+'/6/'+id_restaurant;
    return this.http.get(path, options);
  }

  findPlats(pageNumber:any, id_restaurant: any){
    const options = this.httpUtil.formOption("application/json", true);
    const path = base_url+'restaurants/plats/'+pageNumber+'/6/'+id_restaurant;
    return this.http.get(path, options);
  }
}
