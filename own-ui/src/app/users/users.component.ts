import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService: UserService,
    private toastr: ToastrService,
  ) { }
  userData;
  ngOnInit() {
    this.getUsers();
  }
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
    let formData = {
      name: form.value.unam,
      mobile: form.value.umobil,
      place: form.value.uemai
    }
    this._userService.addUser(formData).then((data) => {
      if (data['status']) {
        this.getUsers();
        this.toastr.info('User Added Successfully')
      }
    }, (err) => {
      console.log(err)
    })
  }
}
