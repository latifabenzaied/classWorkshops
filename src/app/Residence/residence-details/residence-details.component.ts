import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Residence} from "../../core/Models/Residence";

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id: number | null = null; // Type number
  constructor(private route: ActivatedRoute) {}
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", status: "Disponible"},
    {id:2, "name": "El yasmine", "address":"Ezzahra", status: "Disponible" },
    {id:3, "name": "El Arij", "address":"Rades", status:"Vendu"},
    {id:4, "name": "El Anber", "address":"inconnu", status: "En Construction"}
  ];
  residenceDetails: Residence | undefined;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : null;
    this.residenceDetails = this.listResidences.find((residence) => residence.id === this.id);
  }

  showResdenceDetails() {
    this.residenceDetails = this.listResidences.find((residence) => residence.id === this.id);
  }

  nextResidence() {
    if(this.id!=null){
      if (this.id < this.listResidences.length ) {
        this.id++;
      } else {
        this.id = 1;
      }
      this.showResdenceDetails();
    }
  }
  backResidence() {
    if(this.id!=null){
      if (this.id > 1) {
        this.id--;
      } else {
        this.id = this.listResidences.length ;
      }
      this.showResdenceDetails();
    }
    }

}
