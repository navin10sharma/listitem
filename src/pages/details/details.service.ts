import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx"

@Injectable()
export class DetailsService {

    constructor(private http: Http) {
  }


  getListDetails(){
      return this.http.get('assets/details/listDetails.json')
     .map((response:Response)=>response.json());
     }
      
  }
  



  
