import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      
  })
  // withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //define get and post ,delete
  //create restaurant using post method
  postRestaurant(data:any): Observable<any>{
    return this._http.post<any>("http://localhost:3000/products",data, httpOptions);
  }

  getRestaurant(){
    return this._http.get<any>("https://3000-komalsonar8-annapurnahot-uxgl0z5ab8m.ws-us38.gitpod.io/products/1", httpOptions);
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
  
    updateRestaurant(data:any, id:number){
      return this._http.put<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{
        return res;
      }))

    }

    deleteRestaurant(id:number){
      return this._http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{
        return res;
      }))

    }


  }