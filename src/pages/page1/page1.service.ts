import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx"

@Injectable()
export class Service {

    constructor(private http: Http) {
  }


  getList(){
      return this.http.get('assets/details/listDetails.json')
     .map((response:Response)=>response.json());
     }
      
  }
  



  
