import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Modules/users/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userCount:number=0


  sideBarStatus: Boolean=true

  constructor(private userAPI:ApiService){}

  ngOnInit(): void {
    this.getTotalEmployeeCount()
  }

  menuBtnClicked(){
    this.sideBarStatus= !this.sideBarStatus
  }

  getTotalEmployeeCount(){
    this.userAPI.getAllUserAPI().subscribe((res:any)=>{
      this.userCount=res.length
    })
  }



}
