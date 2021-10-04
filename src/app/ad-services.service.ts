import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdServicesService {

  constructor(private _http:HttpClient) { }
    postAdServices(data:any){
      return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
        return res;
      }))
    }
    getAdServices(){
      return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
        return res;
      }))
    }
    updateAdServices(data:any, id:number){
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


