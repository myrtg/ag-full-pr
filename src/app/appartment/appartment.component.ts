import {Component, OnInit} from '@angular/core';
import {AppartmentService} from "../services/appartment.service";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit{
  listappart:Apartment[]=[];
  constructor(private appartmentService: AppartmentService) {

  }

  ngOnInit(): void {
    this.appartmentService.getappart()
      .subscribe((data) => {
      this.listappart = data;
      console.log((JSON.stringify(this.listappart)));
      }
    )


  }
}
