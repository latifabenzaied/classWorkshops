import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  myForm !: FormGroup
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {

    this.myForm=this.fb.group({
      apartmentNumber: ['', [Validators.required]],
      floorNumber: ['', [Validators.required, Validators.email]],
      surface: ['', Validators.required],
      terrace: ['', Validators.required],
      surfaceTerrace: ['', Validators.required],
      category: ['', Validators.required],
      residence: ['', Validators.required],

    })
  }


}
