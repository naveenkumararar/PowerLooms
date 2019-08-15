import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saree-details',
  templateUrl: './saree-details.component.html',
  styleUrls: ['./saree-details.component.scss']
})
export class SareeDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPayment(){
    this.router.navigateByUrl('payment');

  }
}
