import {Component, OnInit} from '@angular/core';
import {AppartmentService} from "../services/appartment.service";

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements  OnInit {

  constructor(private appartmentService: AppartmentService) {

  }

  ngOnInit(): void {
    this.appartmentService.getappart().subscribe(
      (data) => {
        console.log(data);
      }
    )


  }
}
