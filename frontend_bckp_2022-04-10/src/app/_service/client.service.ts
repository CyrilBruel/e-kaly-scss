import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { base_url } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpUtil: HttpService, private http: HttpClient) { }

  findPlatsClient(pageNumber:any){
    const options = this.httpUtil.formOption("application/json", true);
    const path = base_url+'produits/'+pageNumber+'/'+6;
    const body = {
      pageNumber: 1,
      nPerPage: 6
    }
    return this.http.get(path, options);
  }
}
