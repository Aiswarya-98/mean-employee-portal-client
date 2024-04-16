import { Component, OnInit } from '@angular/core';
import { userSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  page:number =1
  allUsers : userSchema[]=[]
  searchkey:string=''

  constructor(private api:ApiService, private toaster:ToastrService){}

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

  deleteUser(id:any){
    this.api.removeUserAPI(id).subscribe(
      (res:any)=>{
        this.toaster.success("user removed")
        this.getAllUserList()
      }
    )
  }

  generatePDF(){
    let pdf = new jspdf()
    let head = [['EmpId','Username','Email','Status']]
    let body: any =[]
    this.allUsers.forEach((item:any)=>{
      if(item.id!=='1'){
        body.push([item.empId,item.name,item.email,item.status])

      }
    })

    pdf.setFontSize(16)
    pdf.text("All Users list",10,10)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save('alluserslist.pdf')
  }

  sortByName(){
    this.allUsers.sort((user1:any,user2:any)=>user1.name.localeCompare(user2.name))
  }

  sortById(){
    this.allUsers.sort((user1:any,user2:any)=>user1.empId.localeCompare(user2.empId))
  }


}
