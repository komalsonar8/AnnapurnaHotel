import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 /* formValue=FormGroup;*/

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

  /*  this.formValue1 = this.formBuilder.group({ 

    name:[''],
    mobile:[''],
    email:[''],
    address:[''],
    services:['']

    }) */
  }

}
