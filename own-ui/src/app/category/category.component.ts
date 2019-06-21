import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private _CategoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }
  categoryData;
  getCategory() {
    this._CategoryService.getCategory().then((data) => {
      console.log(data);
      this.categoryData = data;
    }, (err) => {
      console.log(err)
    })

  }

  createCategory() {
    document.getElementById('create').style.display = 'block';

  }
  onCloseHandled() {
    document.getElementById('create').style.display = 'none';
  }

  getFormData(form) {
    console.log(form.value)
    let formData = {
      id: 'category_' + Date.parse(Date()),
      name: form.value.name,
      description: form.value.description
    }
    this._CategoryService.addCategory(formData).then((data) => {
      if (data['status']) {
        this.toastr.info(data['status']);
        this.getCategory();
        document.getElementById('create').style.display = 'none';
      }
    }, (err) => {
      console.log(err)
    })
  }
}
