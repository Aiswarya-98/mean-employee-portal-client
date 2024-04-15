import { Component, OnInit } from '@angular/core';
import { userSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUsers : userSchema[]=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllUserList()
  }

  getAllUserList (){
    this.api.getAllUserAPI().subscribe({
      next:(result:any)=>{
        this.allUsers=result
        console.log(this.allUsers);
        
      },
      error:(reason:any)=>{
        console.log(reason);
      }
      
    })
  }

}
