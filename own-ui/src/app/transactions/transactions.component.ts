import { Component, OnInit } from '@angular/core';
// import { UserService } from './users.service';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from './transactions.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [TransactionService]
})
export class TransactionsComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private _TransactionService: TransactionService) { }
  transactionData;
  ngOnInit() {
    this.getTransactions();
  }
  getTransactions() {
    this._TransactionService.getTransactions().then((data) => {
      console.log(data);
      if (data['length']) {
        this.transactionData = data;
      } else {
        this.transactionData = [];
      }
    }, (err) => {
      console.log(err)
    })
  }


  createTransaction(){
    document.getElementById('create').style.display='block';
  }

  onCloseHandled(){
    document.getElementById('create').style.display='none';
  }
  getFormData(form){
    // console.log(form.value)
    let formData={
      id:'transaction'+Date.parse(Date()),
      empId:form.value.emp,
      // noOfSaree:form.value.sarees,
      sareeWeight:form.value.sareeweight,
      rate:form.value.rate,
      item:form.value.item,
      jari:form.value.jari,
      payment:form.value.payment,
      date:form.value.date,
      extraPayment:form.value.extrapayment,
      warp:form.value.warp,
      cone:form.value.cone
    }

    this._TransactionService.addTranstaction(formData).then((data)=>{
      if(data['status']){
        this.toastr.info(data['status']);
        this.getTransactions();
        // form.reset();
      }else{

      }
    },(err)=>{
      console.log(err)
    })
  }
}
