import { Component, OnInit } from '@angular/core';
import {UserService} from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UserService) { }
userData;
  ngOnInit() {
    this._userService.getUsers()
    .then((data)=>{
      console.log(data,'-----data');
      this.userData=data;
    },(err)=>{
      console.log(err)
    })
  }


//   this._FeedRateReportService.search(formData).then((data) => {
//     if (data['result'].length == 0) {
//         this.toastr.warning('No Data Available')
//         document.getElementById("mask").style.display = "none";
//     } else {
//         this.header = 1;
//         this.plotStockData(data['result']);
//     }
// }, (err) => {
//     console.log(err)
// })

}
