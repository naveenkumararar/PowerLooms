import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  buyNow(){
    this.router.navigateByUrl('saree-details');
    //          this.router.navigate(['/dashboard/dashboard']);

  }

}
