import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // SERVER_URL : string="http://localhost:3000"
  SERVER_URL : string="https://mean-employee-portal-server.onrender.com"
  constructor(private http: HttpClient) { }

  getAdminDetails () {
    return this.http.get(`${this.SERVER_URL}/users/1`)
  }

  updateAdminAPI(adminDetails:any){
    return this.http.put(`${this.SERVER_URL}/users/1`,adminDetails)

  }

  isloggedIn(){
    return !!sessionStorage.getItem("adminDetails")
  }
}
