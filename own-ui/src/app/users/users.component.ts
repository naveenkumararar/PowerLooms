import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { ToastrService } from 'ngx-toastr';
import { ReversePipe } from '../pipes/reverse/reverse.pipe'
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService,CategoryService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService: UserService,
    private toastr: ToastrService,
    private _CategoryService:CategoryService
  ) { }
  userData;
  ngOnInit() {
    this.getUsers();
    this.getCategory();
  }
  categoryData;

  getUsers() {
    this._userService.getUsers()
      .then((data) => {
        this.userData = data;
      }, (err) => {
        console.log(err)
      })
  }
  createUser() {
    document.getElementById("create").style.display = 'block'
  }
  onCloseHandled() {
    document.getElementById("create").style.display = 'none'
  }
  onUserFormSubmit(form) {
    console.log(form.value)
    let formData = {
      id:'user_'+Date.parse(Date()),
      category: form.value.category,
      name: form.value.unam,
      mobile: form.value.umobil,
      place: form.value.uemai
    }
    this._userService.addUser(formData).then((data) => {
      console.log(data)
      if (data['status']=='added suucessfully') {
        this.getUsers();
        form.reset();
        document.getElementById('create').style.display='none';
        this.toastr.info('User Added Successfully')
      }
    }, (err) => {
      console.log(err)
    })
  }
  getCategory(){
    this._CategoryService.getCategory().then((data)=>{
      this.categoryData=data;
    },(msg)=>{
      console.log(msg)
    })

  }
}
