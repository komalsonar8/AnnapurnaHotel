import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from '../shared/restaurant.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue!: FormGroup
  restaurantmodelobject:RestaurantData=new RestaurantData;
  constructor(private formBuilder: FormBuilder , private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    });

    this.api.getRestaurant().subscribe((res: any) => {
      console.log(res);
    });
    
  }


    //subscribing data
    addResto(){
      this.restaurantmodelobject.name=this.formValue.value.name;
      this.restaurantmodelobject.email=this.formValue.value.email;
      this.restaurantmodelobject.mobile=this.formValue.value.mobile;
      this.restaurantmodelobject.address=this.formValue.value.address;
      this.restaurantmodelobject.services=this.formValue.value.services;

      this.api.postRestaurant(this.restaurantmodelobject).subscribe((res: any) => {
        console.log(res);
      });
      // .subscribe(res=>{
      //   console.log(res);
      //   alert("Restaurant Record Added Successfully");
      // },
      // err=>{
      //   alert("Something Went Wrong!!!!");

      // }
      // )
      
    }
  

}
