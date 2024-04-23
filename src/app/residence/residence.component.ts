import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { Apartment } from '../models/apartment';
import {AppartmentService} from "../services/appartment.service";

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
imageUrl="../../assets/images/"
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":this.imageUrl+"residence1.jpg"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence3.jpg"},
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg"},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/residence2.jpg"}
   ];


   listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":1,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":1,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":2,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },]
searchsurface!:number
  var1:string="bonjour"
  var2:string="4Arctic6"
  prop:boolean=false

  constructor(private appartementService:AppartmentService) {}

  somme!:number
     show(){
       this.somme=this.appartementService.getnumber(this.listApartments,"floorNum",1);
    }

  add(){
    console.log("good add ...")

  }
}
