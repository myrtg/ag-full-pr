import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {

  baseurl='http://localhost:3000/appartement';

  constructor(private http:HttpClient) {}
  getnumber(list:any,criteria:any,value:any){
    let n=0;
    for (let i in list) {
      if (list[i][criteria] == value)
        n++
    }
    return n
  }


  getappart():Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.baseurl);

  }
  addapart():Observable<Apartment[]> {
    return this.http.post<Apartment[]>(this.baseurl,Apartment);

  }
  deleteapart(id:any):Observable<Apartment[]> {
    return this.http.delete<Apartment[]>(this.baseurl+id);
  }
  updateapart(id:any):Observable<Apartment[]> {
    return this.http.put<Apartment[]>(this.baseurl,Apartment);
  }


}
