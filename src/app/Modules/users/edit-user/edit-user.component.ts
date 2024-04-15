import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:userSchema={}
  constructor(private route:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id} = res
      this.getUserDetails(id)
      
    })
  }

  getUserDetails(userId:string){
    this.api.getSingleUserAPI(userId).subscribe((res:any)=>{
      this.user = res
      console.log(this.user);
      
    })
  }

}
