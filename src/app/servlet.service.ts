import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServletService {
  [x: string]: any;

  constructor(private _http:HttpClient) { }

  register(userdata)
  {
    return this._http.post("http://localhost:8080/DriveTracker/createServlet",userdata);
  }

  viewData()
  {
    return this._http.get("http://localhost:8080/DriveTracker/viewServlet");
  }

  deleteData(id){
    return this._http.post("http://localhost:8080/DriveTracker/DeleteServlet",id);

  }

  editData(i)
  {
    return this._http.post("http://localhost:8080/DriveTracker/EditServlet",i);

  }


}
