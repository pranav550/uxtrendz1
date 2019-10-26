import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.url)
  }

  userName= new BehaviorSubject('john Doe')
}
